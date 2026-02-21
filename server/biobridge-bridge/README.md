BioBridge SDK Windows Bridge

This Windows-only service talks to the FingerTec BioBridge SDK and exposes
HTTP endpoints used by the web app backend. It must run on a Windows PC
that has the BioBridge SDK v3 installed.

Endpoints
- POST http://localhost:5001/sync/users
- POST http://localhost:5001/sync/attendance
- POST http://localhost:5001/health

Required SDK installation
1) Install "FingerTec BioBridge SDK v3.0.007".
2) Ensure the SDK COM components are registered (the installer does this).

Build and run (Windows)
1) Open PowerShell in this folder.
2) Build:
   dotnet build -c Release
3) Run:
   dotnet run -c Release

Optional: point to a shared config file
- Set environment variable BIOBRIDGE_CONFIG to your main config file.
  Example:
  setx BIOBRIDGE_CONFIG "C:\HR Payroll System\server\config.json"

Notes
- The SDK is Windows-only. macOS cannot directly use the SDK.
- The web app still runs in any browser on Windows or macOS; the SDK bridge
  must run on a Windows machine reachable on the LAN.
