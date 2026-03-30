using System.Net;
using System.Text;
using System.Text.Json;
using System.Runtime.InteropServices;
using System.Data;
using System.Data.OleDb;
using System.Linq;

var service = new BioBridgeBridgeService();
service.Run();

public class BioBridgeBridgeService
{
    private readonly HttpListener _listener = new();
    private readonly JsonSerializerOptions _jsonOptions = new() { PropertyNamingPolicy = JsonNamingPolicy.CamelCase };

    public void Run()
    {
        _listener.Prefixes.Add("http://+:5001/");
        _listener.Start();
        Console.WriteLine("BioBridge SDK bridge running at http://0.0.0.0:5001");
        ListenLoop();
    }

    private void ListenLoop()
    {
        while (true)
        {
            var context = _listener.GetContext();
            _ = Task.Run(() => HandleRequest(context));
        }
    }

    private async Task HandleRequest(HttpListenerContext context)
    {
        try
        {
            if (context.Request.HttpMethod == "POST" && context.Request.Url?.AbsolutePath == "/health")
            {
                await WriteJson(context.Response, new { status = "ok" });
                return;
            }

            if (context.Request.HttpMethod == "POST" && context.Request.Url?.AbsolutePath == "/sync/users")
            {
                var body = await ReadBody(context.Request);
                var payload = JsonSerializer.Deserialize<SyncRequest>(body, _jsonOptions) ?? new SyncRequest();
                var config = ConfigLoader.Load(payload);
                var result = BioBridgeSync.SyncUsers(config);
                await WriteJson(context.Response, result);
                return;
            }

            if (context.Request.HttpMethod == "POST" && context.Request.Url?.AbsolutePath == "/sync/attendance")
            {
                var body = await ReadBody(context.Request);
                var payload = JsonSerializer.Deserialize<SyncRequest>(body, _jsonOptions) ?? new SyncRequest();
                var config = ConfigLoader.Load(payload);
                var result = BioBridgeSync.SyncAttendance(config);
                await WriteJson(context.Response, result);
                return;
            }

        if (context.Request.HttpMethod == "POST" && context.Request.Url?.AbsolutePath == "/sync/attendance-table")
        {
            var body = await ReadBody(context.Request);
            var payload = JsonSerializer.Deserialize<SyncRequest>(body, _jsonOptions) ?? new SyncRequest();
            var config = ConfigLoader.Load(payload);
            var result = AccessDbReader.ReadAttendanceTable(config);
            await WriteJson(context.Response, result);
            return;
        }

            context.Response.StatusCode = 404;
            await WriteJson(context.Response, new { status = "error", message = "Not found." });
        }
        catch (Exception ex)
        {
            context.Response.StatusCode = 500;
            await WriteJson(context.Response, new { status = "error", message = ex.Message });
        }
    }

    private static async Task<string> ReadBody(HttpListenerRequest request)
    {
        using var reader = new StreamReader(request.InputStream, request.ContentEncoding);
        return await reader.ReadToEndAsync();
    }

    private async Task WriteJson(HttpListenerResponse response, object payload)
    {
        response.Headers.Add("Access-Control-Allow-Origin", "*");
        response.ContentType = "application/json";
        var json = JsonSerializer.Serialize(payload, _jsonOptions);
        var buffer = Encoding.UTF8.GetBytes(json);
        response.ContentLength64 = buffer.Length;
        await response.OutputStream.WriteAsync(buffer, 0, buffer.Length);
        response.OutputStream.Close();
    }
}

public static class ConfigLoader
{
    public static BioBridgeConfig Load(SyncRequest payload)
    {
        var path = Environment.GetEnvironmentVariable("BIOBRIDGE_CONFIG");
        var config = new BioBridgeConfig();

        if (!string.IsNullOrWhiteSpace(path) && File.Exists(path))
        {
            var json = File.ReadAllText(path);
            var loaded = JsonSerializer.Deserialize<BioBridgeConfig>(json);
            if (loaded != null)
            {
                config = loaded;
            }
        }

        config.DeviceIp = payload.DeviceIp ?? config.DeviceIp;
        config.DevicePort = payload.DevicePort ?? config.DevicePort;
        config.DeviceModel = payload.DeviceModel ?? config.DeviceModel;
        config.DeviceNo = payload.DeviceNo ?? config.DeviceNo;
        config.DeviceCommKey = payload.DeviceCommKey ?? config.DeviceCommKey;
        config.MdbPath = payload.MdbPath ?? config.MdbPath;
        config.MdbPassword = payload.MdbPassword ?? config.MdbPassword;

        return config;
    }
}

public static class BioBridgeSync
{
    private static readonly string[] ProgIds =
    {
        "BioBridgeSDKv3lib.BioBridgeSDKv3lib",
        "BioBridgeSDKDLLv3.BioBridgeSDKDLLv3"
    };

    public static SyncResult SyncUsers(BioBridgeConfig config)
    {
        if (!string.IsNullOrWhiteSpace(config.MdbPath))
        {
            return AccessDbReader.ReadUsers(config);
        }

        var sdk = CreateSdkInstance();
        if (sdk == null)
        {
            return new SyncResult
            {
                Status = "error",
                Message = "BioBridge SDK COM object not found. Install the SDK first."
            };
        }

        try
        {
            var connectResult = sdk.Connect_TCPIP(
                config.DeviceModel,
                config.DeviceNo,
                config.DeviceIp,
                config.DevicePort,
                config.DeviceCommKey
            );

            if (connectResult != 0)
            {
                return new SyncResult
                {
                    Status = "error",
                    Message = $"Connect_TCPIP failed with code {connectResult}."
                };
            }

            var employees = new List<EmployeeRecord>();
            int record = 0;

            var readResult = sdk.ReadAllUserInfo(ref record);
            if (readResult == 0)
            {
                object enrollNo = 0;
                object name = "";
                object pwd = "";
                object priv = 0;
                object enable = false;

                while (sdk.GetAllUserInfo(ref enrollNo, ref name, ref pwd, ref priv, ref enable) == 0)
                {
                    employees.Add(new EmployeeRecord
                    {
                        EmployeeId = Convert.ToString(enrollNo) ?? "",
                        Names = Convert.ToString(name) ?? "",
                        StartDate = "",
                        Shift = "",
                        Status = (bool)enable ? "Active" : "Inactive"
                    });
                }
            }

            sdk.Disconnect();

            return new SyncResult
            {
                Status = "success",
                Message = "Users synced from device.",
                Employees = employees,
                LastSyncAt = DateTime.UtcNow.ToString("o")
            };
        }
        catch (Exception ex)
        {
            return new SyncResult
            {
                Status = "error",
                Message = $"SDK error: {ex.Message}"
            };
        }
        finally
        {
            try
            {
                if (sdk != null && Marshal.IsComObject(sdk))
                {
                    Marshal.FinalReleaseComObject(sdk);
                }
            }
            catch
            {
                // ignore cleanup errors
            }
        }
    }

    public static AttendanceResult SyncAttendance(BioBridgeConfig config)
    {
        if (!string.IsNullOrWhiteSpace(config.MdbPath))
        {
            return AccessDbReader.ReadAttendance(config);
        }

        var sdk = CreateSdkInstance();
        if (sdk == null)
        {
            return new AttendanceResult
            {
                Status = "error",
                Message = "BioBridge SDK COM object not found. Install the SDK first."
            };
        }

        try
        {
            var connectResult = sdk.Connect_TCPIP(
                config.DeviceModel,
                config.DeviceNo,
                config.DeviceIp,
                config.DevicePort,
                config.DeviceCommKey
            );

            if (connectResult != 0)
            {
                return new AttendanceResult
                {
                    Status = "error",
                    Message = $"Connect_TCPIP failed with code {connectResult}."
                };
            }

            var logs = new List<AttendanceLog>();
            int logCount = 0;

            var readResult = sdk.ReadGeneralLog(ref logCount);
            if (readResult == 0)
            {
                object enrollNo = 0;
                object year = 0;
                object month = 0;
                object day = 0;
                object hour = 0;
                object minute = 0;
                object second = 0;
                object verify = 0;
                object io = 0;
                object work = 0;

                while (sdk.GetGeneralLog(
                           ref enrollNo,
                           ref year,
                           ref month,
                           ref day,
                           ref hour,
                           ref minute,
                           ref second,
                           ref verify,
                           ref io,
                           ref work
                       ) == 0)
                {
                    var date = $"{year:D4}-{month:D2}-{day:D2}";
                    var time = $"{hour:D2}:{minute:D2}:{second:D2}";
                    var verifyLabel = MapVerifyMode(Convert.ToInt32(verify));
                    var inOutLabel = MapInOut(Convert.ToInt32(io));
                    logs.Add(new AttendanceLog
                    {
                        EmployeeId = Convert.ToString(enrollNo) ?? "",
                        Date = date,
                        Time = time,
                        Verify = verifyLabel,
                        InOut = inOutLabel,
                        WorkCode = Convert.ToString(work) ?? ""
                    });
                }
            }

            sdk.Disconnect();

            return new AttendanceResult
            {
                Status = "success",
                Message = "Attendance logs synced from device.",
                Logs = logs
            };
        }
        catch (Exception ex)
        {
            return new AttendanceResult
            {
                Status = "error",
                Message = $"SDK error: {ex.Message}"
            };
        }
        finally
        {
            try
            {
                if (sdk != null && Marshal.IsComObject(sdk))
                {
                    Marshal.FinalReleaseComObject(sdk);
                }
            }
            catch
            {
                // ignore cleanup errors
            }
        }
    }

    public static string MapVerifyMode(int code)
    {
        return code switch
        {
            0 => "Password",
            1 => "Fingerprint",
            2 => "Card",
            3 => "Card + Password",
            4 => "Card + Fingerprint",
            5 => "Fingerprint + Password",
            6 => "Face",
            7 => "Palm",
            8 => "Face + Fingerprint",
            9 => "Face + Password",
            10 => "Face + Card",
            101 => "Slave Verify (R2i)",
            _ => $"Code {code}"
        };
    }

    public static string MapInOut(int code)
    {
        return code switch
        {
            0 => "In",
            1 => "Out",
            2 => "Break",
            3 => "Return",
            4 => "Overtime In",
            5 => "Overtime Out",
            _ => $"State {code}"
        };
    }

    private static dynamic? CreateSdkInstance()
    {
        foreach (var progId in ProgIds)
        {
            var type = Type.GetTypeFromProgID(progId);
            if (type != null)
            {
                return Activator.CreateInstance(type);
            }
        }
        return null;
    }
}

public class SyncRequest
{
    public string? DeviceIp { get; set; }
    public int? DevicePort { get; set; }
    public string? DeviceModel { get; set; }
    public int? DeviceNo { get; set; }
    public int? DeviceCommKey { get; set; }
    public string? MdbPath { get; set; }
    public string? MdbPassword { get; set; }
}

public class BioBridgeConfig
{
    public string DeviceIp { get; set; } = "192.168.1.111";
    public int DevicePort { get; set; } = 4370;
    public string DeviceModel { get; set; } = "Face ID 4";
    public int DeviceNo { get; set; } = 1;
    public int DeviceCommKey { get; set; } = 0;
    public string MdbPath { get; set; } = "";
    public string MdbPassword { get; set; } = "";
}

public class SyncResult
{
    public string Status { get; set; } = "error";
    public string Message { get; set; } = "";
    public List<EmployeeRecord> Employees { get; set; } = new();
    public string? LastSyncAt { get; set; }
}

public class AttendanceResult
{
    public string Status { get; set; } = "error";
    public string Message { get; set; } = "";
    public List<AttendanceLog> Logs { get; set; } = new();
}

public class AttendanceTableResult
{
    public string Status { get; set; } = "error";
    public string Message { get; set; } = "";
    public List<AttendanceTableRow> Rows { get; set; } = new();
}

public class AttendanceLog
{
    public string EmployeeId { get; set; } = "";
    public string Date { get; set; } = "";
    public string Time { get; set; } = "";
    public string Verify { get; set; } = "";
    public string InOut { get; set; } = "";
    public string WorkCode { get; set; } = "";
}

public class AttendanceTableRow
{
    public string Date { get; set; } = "";
    public string UserId { get; set; } = "";
    public string Name { get; set; } = "";
    public string InOut { get; set; } = "";
    public string Work { get; set; } = "";
    public string Overtime { get; set; } = "";
    public string Short { get; set; } = "";
}

public class EmployeeRecord
{
    public string EmployeeId { get; set; } = "";
    public string Names { get; set; } = "";
    public string CostCenter { get; set; } = "";
    public string StartDate { get; set; } = "";
    public string Shift { get; set; } = "";
    public string Status { get; set; } = "";
}

public static class AccessDbReader
{
    public static SyncResult ReadUsers(BioBridgeConfig config)
    {
        try
        {
            using var connection = OpenConnection(config);
            var table = FindUsersTable(connection);
            if (string.IsNullOrWhiteSpace(table))
            {
                return new SyncResult
                {
                    Status = "error",
                    Message = "No suitable users table found in ingress.mdb."
                };
            }

            var employees = new List<EmployeeRecord>();
            using var cmd = new OleDbCommand($"SELECT * FROM [{table}]", connection);
            using var reader = cmd.ExecuteReader();
            if (reader != null)
            {
                var columns = GetColumnLookup(reader);
                while (reader.Read())
                {
                    employees.Add(new EmployeeRecord
                    {
                        EmployeeId = GetString(columns, reader, ColumnHints.UserId),
                        Names = GetString(columns, reader, ColumnHints.Name),
                        CostCenter = GetString(columns, reader, ColumnHints.CostCenter),
                        StartDate = GetDateString(columns, reader, ColumnHints.StartDate),
                        Shift = GetString(columns, reader, ColumnHints.Shift),
                        Status = GetString(columns, reader, ColumnHints.Status)
                    });
                }
            }

            return new SyncResult
            {
                Status = "success",
                Message = $"Users synced from {table}.",
                Employees = employees,
                LastSyncAt = DateTime.UtcNow.ToString("o")
            };
        }
        catch (Exception ex)
        {
            return new SyncResult
            {
                Status = "error",
                Message = $"Access DB error: {ex.Message}"
            };
        }
    }

    public static AttendanceResult ReadAttendance(BioBridgeConfig config)
    {
        try
        {
            using var connection = OpenConnection(config);
            var table = FindBestTable(connection, TableProfile.Attendance, "device_transaction_log");
            if (string.IsNullOrWhiteSpace(table))
            {
                return new AttendanceResult
                {
                    Status = "error",
                    Message = "No suitable attendance table found in ingress.mdb."
                };
            }

            var logs = new List<AttendanceLog>();
            using var cmd = new OleDbCommand($"SELECT * FROM [{table}]", connection);
            using var reader = cmd.ExecuteReader();
            if (reader != null)
            {
                var columns = GetColumnLookup(reader);
                while (reader.Read())
                {
                    var timestamp = GetDateTime(columns, reader, ColumnHints.CheckTime);
                    var date = timestamp?.ToString("yyyy-MM-dd") ?? GetDateString(columns, reader, ColumnHints.Date);
                    var time = timestamp?.ToString("HH:mm:ss") ?? GetTimeString(columns, reader, ColumnHints.Time);
                    var verifyValue = GetString(columns, reader, ColumnHints.Verify);
                    var inOutValue = GetString(columns, reader, ColumnHints.InOut);

                    logs.Add(new AttendanceLog
                    {
                        EmployeeId = GetString(columns, reader, ColumnHints.UserId),
                        Date = date,
                        Time = time,
                        Verify = MapVerifyValue(verifyValue),
                        InOut = MapInOutValue(inOutValue),
                        WorkCode = GetString(columns, reader, ColumnHints.WorkCode)
                    });
                }
            }

            return new AttendanceResult
            {
                Status = "success",
                Message = $"Attendance logs synced from {table}.",
                Logs = logs
            };
        }
        catch (Exception ex)
        {
            return new AttendanceResult
            {
                Status = "error",
                Message = $"Access DB error: {ex.Message}"
            };
        }
    }

    public static AttendanceTableResult ReadAttendanceTable(BioBridgeConfig config)
    {
        try
        {
            using var connection = OpenConnection(config);
            var table = FindBestTable(connection, TableProfile.AttendanceTable, "attendance")
                ?? FindBestTable(connection, TableProfile.AttendanceTable, "Attendance")
                ?? FindBestTable(connection, TableProfile.AttendanceTable, "tbl_attendance")
                ?? FindBestTable(connection, TableProfile.AttendanceTable, "att");
            if (string.IsNullOrWhiteSpace(table))
            {
                return new AttendanceTableResult
                {
                    Status = "error",
                    Message = "No suitable attendance table found in ingress.mdb."
                };
            }

            var nameMap = LoadUserNameMap(connection);
            var rows = new List<AttendanceTableRow>();
            using var cmd = new OleDbCommand($"SELECT * FROM [{table}]", connection);
            using var reader = cmd.ExecuteReader();
            if (reader != null)
            {
                var columns = GetColumnLookup(reader);
                while (reader.Read())
                {
                    var userId = GetString(columns, reader, ColumnHints.UserId);
                    var name = GetString(columns, reader, ColumnHints.Name);
                    if (string.IsNullOrWhiteSpace(name) && !string.IsNullOrWhiteSpace(userId) && nameMap.TryGetValue(userId, out var mappedName))
                    {
                        name = mappedName;
                    }

                    var inTime = GetString(columns, reader, ColumnHints.AttendanceIn);
                    var outTime = GetString(columns, reader, ColumnHints.AttendanceOut);
                    var inOut = "";
                    if (!string.IsNullOrWhiteSpace(inTime) || !string.IsNullOrWhiteSpace(outTime))
                    {
                        inOut = $"{inTime} - {outTime}".Trim();
                    }
                    else
                    {
                        inOut = GetString(columns, reader, ColumnHints.InOut);
                    }

                    rows.Add(new AttendanceTableRow
                    {
                        Date = GetDateString(columns, reader, ColumnHints.AttendanceDate),
                        UserId = userId,
                        Name = name,
                        InOut = inOut,
                        Work = GetString(columns, reader, ColumnHints.WorkHours),
                        Overtime = GetString(columns, reader, ColumnHints.Overtime),
                        Short = GetString(columns, reader, ColumnHints.ShortHours)
                    });
                }
            }

            return new AttendanceTableResult
            {
                Status = "success",
                Message = $"Attendance table synced from {table}.",
                Rows = rows
            };
        }
        catch (Exception ex)
        {
            return new AttendanceTableResult
            {
                Status = "error",
                Message = $"Access DB error: {ex.Message}"
            };
        }
    }

    private static string? FindUsersTable(OleDbConnection connection)
    {
        return FindBestTable(connection, TableProfile.Users, "user")
            ?? FindBestTable(connection, TableProfile.Users, "userinfo")
            ?? FindBestTable(connection, TableProfile.Users, "USERINFO")
            ?? FindBestTable(connection, TableProfile.Users, "UserInfo")
            ?? FindBestTable(connection, TableProfile.Users, "users")
            ?? FindBestTable(connection, TableProfile.Users, "employees");
    }

    private static Dictionary<string, string> LoadUserNameMap(OleDbConnection connection)
    {
        var map = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
        var table = FindUsersTable(connection);
        if (string.IsNullOrWhiteSpace(table)) return map;

        using var cmd = new OleDbCommand($"SELECT * FROM [{table}]", connection);
        using var reader = cmd.ExecuteReader();
        if (reader == null) return map;
        var columns = GetColumnLookup(reader);
        while (reader.Read())
        {
            var userId = GetString(columns, reader, ColumnHints.UserId);
            var name = GetString(columns, reader, ColumnHints.Name);
            if (!string.IsNullOrWhiteSpace(userId) && !string.IsNullOrWhiteSpace(name))
            {
                map[userId] = name;
            }
        }

        return map;
    }

    private static OleDbConnection OpenConnection(BioBridgeConfig config)
    {
        var path = config.MdbPath;
        if (string.IsNullOrWhiteSpace(path))
        {
            throw new InvalidOperationException("MdbPath is missing.");
        }

        var password = config.MdbPassword ?? "";
        var aceConn =
            $"Provider=Microsoft.ACE.OLEDB.12.0;Data Source={path};Persist Security Info=False;Jet OLEDB:Database Password={password};";
        try
        {
            var connection = new OleDbConnection(aceConn);
            connection.Open();
            return connection;
        }
        catch
        {
            var jetConn =
                $"Provider=Microsoft.Jet.OLEDB.4.0;Data Source={path};Persist Security Info=False;Jet OLEDB:Database Password={password};";
            var connection = new OleDbConnection(jetConn);
            connection.Open();
            return connection;
        }
    }

    private static string? FindBestTable(OleDbConnection connection, TableProfile profile, string preferredTable)
    {
        var schema = connection.GetSchema("Tables");
        var bestScore = 0;
        string? bestTable = null;

        foreach (DataRow row in schema.Rows)
        {
            var type = row["TABLE_TYPE"]?.ToString();
            if (!string.Equals(type, "TABLE", StringComparison.OrdinalIgnoreCase)) continue;
            var table = row["TABLE_NAME"]?.ToString();
            if (string.IsNullOrWhiteSpace(table)) continue;

            if (!string.IsNullOrWhiteSpace(preferredTable) &&
                table.Equals(preferredTable, StringComparison.OrdinalIgnoreCase))
            {
                return table;
            }

            var columns = GetColumnNames(connection, table);
            var score = ScoreColumns(columns, profile);
            if (score > bestScore)
            {
                bestScore = score;
                bestTable = table;
            }
        }

        return bestTable;
    }

    private static List<string> GetColumnNames(OleDbConnection connection, string table)
    {
        var columns = new List<string>();
        var schema = connection.GetSchema("Columns", new[] { null, null, table, null });
        foreach (DataRow row in schema.Rows)
        {
            var name = row["COLUMN_NAME"]?.ToString();
            if (!string.IsNullOrWhiteSpace(name))
            {
                columns.Add(name);
            }
        }
        return columns;
    }

    private static int ScoreColumns(List<string> columns, TableProfile profile)
    {
        var normalized = columns.Select(c => c.ToLowerInvariant()).ToList();
        var score = 0;
        foreach (var hint in profile.Required)
        {
            if (normalized.Any(c => c.Contains(hint))) score += 3;
        }
        foreach (var hint in profile.Optional)
        {
            if (normalized.Any(c => c.Contains(hint))) score += 1;
        }
        return score;
    }

    private static Dictionary<string, string> GetColumnLookup(IDataRecord reader)
    {
        var map = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
        for (var i = 0; i < reader.FieldCount; i++)
        {
            var name = reader.GetName(i);
            if (!map.ContainsKey(name))
            {
                map[name] = name;
            }
        }
        return map;
    }

    private static string GetString(Dictionary<string, string> columns, IDataRecord reader, string[] hints)
    {
        foreach (var hint in hints)
        {
            var column = columns.Keys.FirstOrDefault(c =>
                c.Contains(hint, StringComparison.OrdinalIgnoreCase));
            if (!string.IsNullOrWhiteSpace(column))
            {
                var value = reader[column];
                return value == DBNull.Value ? "" : value.ToString() ?? "";
            }
        }
        return "";
    }

    private static string GetDateString(Dictionary<string, string> columns, IDataRecord reader, string[] hints)
    {
        var value = GetDateTime(columns, reader, hints);
        return value?.ToString("yyyy-MM-dd") ?? "";
    }

    private static string GetTimeString(Dictionary<string, string> columns, IDataRecord reader, string[] hints)
    {
        var value = GetDateTime(columns, reader, hints);
        return value?.ToString("HH:mm:ss") ?? "";
    }

    private static DateTime? GetDateTime(Dictionary<string, string> columns, IDataRecord reader, string[] hints)
    {
        foreach (var hint in hints)
        {
            var column = columns.Keys.FirstOrDefault(c =>
                c.Contains(hint, StringComparison.OrdinalIgnoreCase));
            if (!string.IsNullOrWhiteSpace(column))
            {
                var value = reader[column];
                if (value == DBNull.Value) return null;
                if (value is DateTime dt) return dt;
                if (DateTime.TryParse(value.ToString(), out var parsed)) return parsed;
            }
        }
        return null;
    }

    private static string MapVerifyValue(string value)
    {
        if (int.TryParse(value, out var code))
        {
            return BioBridgeSync.MapVerifyMode(code);
        }
        return string.IsNullOrWhiteSpace(value) ? "Unknown" : value;
    }

    private static string MapInOutValue(string value)
    {
        if (int.TryParse(value, out var code))
        {
            return BioBridgeSync.MapInOut(code);
        }
        return string.IsNullOrWhiteSpace(value) ? "Unknown" : value;
    }
}

public class TableProfile
{
    public string[] Required { get; }
    public string[] Optional { get; }

    private TableProfile(string[] required, string[] optional)
    {
        Required = required;
        Optional = optional;
    }

    public static TableProfile Attendance => new(
        new[] { "checktime", "datetime", "logtime", "att" },
        new[] { "userid", "enroll", "verify", "inout", "workcode", "date", "time" }
    );

    public static TableProfile AttendanceTable => new(
        new[] { "date", "user" },
        new[]
        {
            "userid",
            "att_in",
            "att_out",
            "totwork",
            "totot",
            "sumshort",
            "workhour",
            "work",
            "overtime",
            "short",
            "in out",
            "name"
        }
    );

    public static TableProfile Users => new(
        new[] { "userid", "enroll", "name" },
        new[] { "priv", "status", "start", "shift" }
    );
}

public static class ColumnHints
{
    public static readonly string[] UserId = { "userid", "user id", "enroll", "emp", "staff", "id" };
    public static readonly string[] Name = { "name", "username", "fullname", "lastname", "firstname" };
    public static readonly string[] StartDate = { "start", "joindate", "hire" };
    public static readonly string[] Shift = { "shift" };
    public static readonly string[] Status = { "status", "active", "enabled" };
    public static readonly string[] CostCenter = { "costcenter", "cost center", "department", "dept", "section" };

    public static readonly string[] CheckTime = { "checktime", "datetime", "logtime" };
    public static readonly string[] Date = { "date" };
    public static readonly string[] Time = { "time" };
    public static readonly string[] Verify = { "verify", "verifycode", "verifymode" };
    public static readonly string[] InOut = { "in out", "checktype", "inout", "io" };
    public static readonly string[] WorkCode = { "workcode", "work" };

    public static readonly string[] AttendanceDate = { "date", "att_date", "createdate", "lastupdate" };
    public static readonly string[] AttendanceIn = { "att_in", "in_c", "in" };
    public static readonly string[] AttendanceOut = { "att_out", "out_c", "out" };
    public static readonly string[] WorkHours = { "totwork", "workhour", "work" };
    public static readonly string[] Overtime = { "overtime", "totot", "ot", "sumot" };
    public static readonly string[] ShortHours = { "sumshort", "short", "shorthour" };
}
