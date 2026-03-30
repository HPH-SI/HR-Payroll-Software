/**
 * One-off: update npf, bsp, basicWage (and hAllow = 25% of basic when missing) in device-data.json
 */
const fs = require("fs");
const path = require("path");

const DEVICE_DATA = path.join(__dirname, "../server/device-data.json");

// id -> { npf, bsp, basicWage }  (bsp "" when not provided)
const UPDATES = {
  1053: { npf: "2806479", bsp: "2001809918", basicWage: "13.32050618" },
  1055: { npf: "2772949", bsp: "2000393179", basicWage: "13.32050618" },
  1058: { npf: "2807440", bsp: "2001914130", basicWage: "11.59694184" },
  1060: { npf: "2808462", bsp: "2001836663", basicWage: "10.9" },
  1062: { npf: "2808459", bsp: "2000954749", basicWage: "10.9" },
  1063: { npf: "2808461", bsp: "2001798053", basicWage: "10.9" },
  1067: { npf: "2808918", bsp: "2001970348", basicWage: "10.9" },
  1068: { npf: "2808920", bsp: "2001959085", basicWage: "10.9" },
  1069: { npf: "2802113", bsp: "2001748876", basicWage: "10.9" },
  1070: { npf: "2801998", bsp: "2001941034", basicWage: "10.9" },
  1071: { npf: "2801995", bsp: "2001933916", basicWage: "10.9" },
  1072: { npf: "2808917", bsp: "2001971858", basicWage: "10.9" },
  1073: { npf: "2809321", bsp: "2001685649", basicWage: "10.9" },
  1075: { npf: "2788203", bsp: "2001470570", basicWage: "10.9" },
  1078: { npf: "2737411", bsp: "2001971817", basicWage: "16.35" },
  1080: { npf: "2772122", bsp: "2000213161", basicWage: "16.35" },
  1081: { npf: "1315595", bsp: "2002010755", basicWage: "10.9" },
  1082: { npf: "1316007", bsp: "2002027379", basicWage: "10.9" },
  1083: { npf: "2810510", bsp: "2002030001", basicWage: "10.9" },
  1084: { npf: "2810884", bsp: "2001975859", basicWage: "10.9" },
  1086: { npf: "2742369", bsp: "2000805677", basicWage: "14.17" },
  1087: { npf: "2811418", bsp: "2001860739", basicWage: "10.9" },
  1088: { npf: "2811964", bsp: "2001311030", basicWage: "10.6" },
  1090: { npf: "2811966", bsp: "2001830468", basicWage: "10.6" },
  1094: { npf: "2812944", bsp: "2002021224", basicWage: "10.6" },
  1096: { npf: "2811965", bsp: "2002000566", basicWage: "12.72" },
  1097: { npf: "2814165", bsp: "2002079214", basicWage: "10.6" },
  1098: { npf: "7872369", bsp: "2002055586", basicWage: "10.3" },
  1100: { npf: "2724925", bsp: "2002048763", basicWage: "10.3" },
  1101: { npf: "2797387", bsp: "2001462593", basicWage: "10.3" },
  1102: { npf: "2814861", bsp: "2002033070", basicWage: "10.3" },
  1103: { npf: "2814860", bsp: "2000568747", basicWage: "10.3" },
  1105: { npf: "2814830", bsp: "2002073142", basicWage: "10.3" },
  1106: { npf: "2815203", bsp: "2001697925", basicWage: "12" },
  1107: { npf: "2814852", bsp: "", basicWage: "10" },
  1108: { npf: "2798662", bsp: "2001718069", basicWage: "12.21" },
  1109: { npf: "2815733", bsp: "2002089395", basicWage: "10" },
  1110: { npf: "2797237", bsp: "2001656277", basicWage: "13" },
  1111: { npf: "2816240", bsp: "2002087506", basicWage: "10" },
  1112: { npf: "2811181", bsp: "2001349139", basicWage: "15" },
  1113: { npf: "1329526", bsp: "4000528697", basicWage: "14.5" },
  1114: { npf: "2809763", bsp: "", basicWage: "10" },
  1115: { npf: "2816349", bsp: "2001282330", basicWage: "12" },
};

const housingFromBasic = (basicStr) => {
  const b = parseFloat(String(basicStr).replace(/,/g, ""));
  if (!Number.isFinite(b) || b <= 0) return "";
  return (Math.round(b * 0.25 * 100) / 100).toFixed(2);
};

const data = JSON.parse(fs.readFileSync(DEVICE_DATA, "utf8"));
let n = 0;
const missing = [];

for (const row of data) {
  const id = String(row.employeeId ?? "").trim();
  const u = UPDATES[id];
  if (!u) continue;
  row.npf = u.npf;
  row.bsp = u.bsp;
  row.basicWage = u.basicWage;
  if (!String(row.hAllow || "").trim()) {
    row.hAllow = housingFromBasic(u.basicWage);
  }
  n += 1;
}

Object.keys(UPDATES).forEach((id) => {
  if (!data.some((r) => String(r.employeeId) === id)) missing.push(id);
});

fs.writeFileSync(DEVICE_DATA, JSON.stringify(data, null, 2) + "\n", "utf8");
console.log(`Updated ${n} employees in device-data.json`);
if (missing.length) console.warn("IDs not found in file:", missing.join(", "));
