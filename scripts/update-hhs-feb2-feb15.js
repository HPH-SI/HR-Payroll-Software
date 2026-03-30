/**
 * Apply manual HHS overrides for fortnight 2026-02-02 .. 2026-02-15.
 * Blank cells -> remove hhs (formula Normal×0.5 for eligible CC).
 */
const fs = require("fs");
const path = require("path");

const FORTNIGHT = "2026-02-02_2026-02-15";
const SHEET = path.join(__dirname, "..", "server", "attendance-sheet-manual.json");
const DEVICE = path.join(__dirname, "..", "server", "device-data.json");

const RAW = `TANEKO Sandra	45
MILTON Ellen	44.75
ARUOMEA Christina	
SUIMAEA, Rachel S. 	
RUKUIWAQA Moffat	
FANASIA, Gretal 	40.5
RUKASI, Florence	
SIUNARII, Alison	40.75
OGE, Marvin	
PENIOP Clement	
NAPS Patteson	45
TOVAGETO Derrick	
TALUASI Elizabeth	45
LEGUMANA Titus	
BUNIA Cleophas	45
BELIGA Jenny	45
JULIAN Salote	45
MANU Rose	45
RIKO Annette	45
BELO Alick	44.5
NE'E Glenda	
ADI Joana	
HAMBALU Lorina	45
KWANAFIA Lovelyn	
TATAU Enest	45
LONGANIMALA Ben	
Kuper Yvonne	
ANISI Celesty	
PITUMANA Madlyn	45
WAKI Frank 	
GAROSEPI FAY Veronica	45
SIATA ALICK EDDIMOND 	44.75
LUI Philip 	
TALAI Martin 	
IDU Pricilla	44.5
Sina Selina	
Halumae Muriel	
Kwanga Esther	
Alatala Grace Evalyn	
Kala Jessy 	14.75
Hikinao Dalcy 	
Baulo John	45
Spillius Balinda	
Ngivalasi Neverlyn 	
Junior Elifau Eddie 	
Ramofafia David 	
Seimoana Elizabeth 	
Kasukea Weape Meverlyn 	
Fiku Siapu Florence 	
Ino Sylvia 	22.5
Futia Maery	
Walani Sheila	
Parkinson Moses 	44.75
Aigah Jerol	
Faifu Kate	
Mara Joy Hadassah	
Nisha Joy 	
Roko Joyce	45
Salu Linma	
Pavu N Salina 	45
Maehorana Renetta 	
Luis Marion	
Noli M Mary	
Hou Rose Diana	
Hasi Delma	
Toku Odikana 	
Tiba John 	
Anilafa Amasia Davy	
Mena'a Margaret	
Masura Hellen	
O'oi Jerlyn	45
Vuthia Ngelea Bounty	
Honihuitoro Lovelyn	
Sorumana Don 	
Hadobola Augustine 	
Afia Anisca	
Batalididi Joycelyn 	45
Moale Jenny	
Gordon Doncy	
Sunaone Daledan Chris	
Gasibule Zebrina Joy	
Leni Simon Junior	
Basu Ivory	
Ariki Bareth 	
Muiri'i Marisha 	
Kalae Junior	
Saeve Rosina	
Anilafa Oge Adon 	
Makania Esther 	44.75
Kiini Barbra 	45
Ruru Rose	
Kemangava Pretty Lovelyn	
Donga Eddie Alisha	
Gu'ufo'oa Jnr Jock	43.75
Maite Austin	37.5
Ieva Helmah	
Baniatawa Kramon	
Fiulawa Niute'e Jimmy 	
Uiga Sarah 	
Rau Samantha	
Fernandez Betotina Marguerita	
Kuper Koi Robert	
Nasihunu Varinah 	
Kanaoli Jerolyn	
Lago Hansol	
Elson Hezishel	
Tepai Ninah	
Nego Joddy	
Tekosi Bravelyn	
Riitefia Justin 	45
Waiwori Lynette	
Titiri Simmy	
Mesepitu Tarepala Tonia	
Deve Haoia Gloria	40.75
Siau Tracy	45
Takarii Margret	40.75
Roosevelt Genesis	44.75
Melapi Junior	
Ekotani Kefa William	
Elega John	
Monohoru Senrose	30
Honi Greyleen	
Lio Ella	
Sara Cecilia	
Hivapule Rodney	44.5
Pio Dava Frank Junior	
Rasini Fagana Susan	44.75
Vaeto Cranolyn	
Panda Clinton	45
Hadosaia Greyleen	
Ouou Stacey	
Kala Doreen	0
Papage Barbra	45
Dao Piqu Florence	
Mamata Jordan	39.75
Taisia Tahirih Zaynab	
Manetoali Alice	
Tulumae Wesley	
Paulsen Alexander	`;

function normName(s) {
  return String(s || "")
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase();
}

function parseRows(raw) {
  const out = [];
  for (const line of raw.split("\n")) {
    const t = line.trimEnd();
    if (!t.trim()) continue;
    let name;
    let numStr = "";
    if (t.includes("\t")) {
      const p = t.split("\t");
      name = p[0].trim();
      numStr = (p[1] || "").trim();
    } else {
      const m = t.match(/^(.+?)\s+(\d+(?:\.\d+)?)\s*$/);
      if (m) {
        name = m[1].trim();
        numStr = m[2];
      } else {
        name = t.trim();
      }
    }
    let hhs = null;
    if (numStr !== "") {
      const n = Number(numStr);
      if (!Number.isFinite(n)) {
        console.warn("Bad number for", name, numStr);
      } else {
        hhs = n;
      }
    }
    out.push({ name, hhs });
  }
  return out;
}

const employees = JSON.parse(fs.readFileSync(DEVICE, "utf8"));
const byNorm = new Map();
for (const e of employees) {
  const n = normName(e.names);
  if (byNorm.has(n)) {
    console.warn("Duplicate name in device-data:", n);
  }
  byNorm.set(n, String(e.employeeId));
}

const sheet = JSON.parse(fs.readFileSync(SHEET, "utf8"));
const block = sheet[FORTNIGHT];
if (!block || typeof block !== "object") {
  console.error("Missing fortnight", FORTNIGHT);
  process.exit(1);
}

const rows = parseRows(RAW);
let updated = 0;
const missing = [];
const noRow = [];

for (const { name, hhs } of rows) {
  const id = byNorm.get(normName(name));
  if (!id) {
    missing.push(name);
    continue;
  }
  const entry = block[id];
  if (!entry) {
    noRow.push({ name, id });
    continue;
  }
  if (hhs === null) {
    delete entry.hhs;
  } else {
    entry.hhs = hhs;
  }
  updated++;
}

fs.writeFileSync(SHEET, JSON.stringify(sheet, null, 2) + "\n", "utf8");

console.log("Fortnight:", FORTNIGHT);
console.log("Rows in list:", rows.length);
console.log("Updated:", updated);
if (missing.length) {
  console.log("Names not in device-data:", missing.length);
  missing.forEach((m) => console.log("  -", m));
}
if (noRow.length) {
  console.log("No attendance row for id (skipped):");
  noRow.forEach((x) => console.log("  -", x.name, x.id));
}
