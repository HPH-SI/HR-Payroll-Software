/**
 * Sets conveyanceDayTiers (best fit to target) and conveyanceAll + conveyanceFixed
 * so payroll uses the exact dollar amounts from the list.
 * Usage: node scripts/set-conveyance-tiers-from-targets.js
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const DEVICE = path.join(ROOT, "server/device-data.json");
const MANUAL = path.join(ROOT, "server/attendance-sheet-manual.json");

const TARGET_LINES = `
TANEKO Sandra	180
MILTON Ellen	75
ARUOMEA Christina	180
SUIMAEA, Rachel S. 	165
RUKUIWAQA Moffat	75
FANASIA, Gretal 	90
RUKASI, Florence	90
SIUNARII, Alison	180
OGE, Marvin	90
PENIOP Clement	82.5
NAPS Patteson	180
TOVAGETO Derrick	90
TALUASI Elizabeth	180
LEGUMANA Titus	82.5
BUNIA Cleophas	180
BELIGA Jenny	180
JULIAN Salote	180
MANU Rose	180
RIKO Annette	180
BELO Alick	180
NE'E Glenda	90
ADI Joana	90
HAMBALU Lorina	90
KWANAFIA Lovelyn	82.5
TATAU Enest	165
LONGANIMALA Ben	90
Kuper Yvonne	67.5
ANISI Celesty	75
PITUMANA Madlyn	180
WAKI Frank 	180
GAROSEPI FAY Veronica	180
SIATA ALICK EDDIMOND 	75
LUI Philip 	135
TALAI Martin	90
IDU Pricilla	180
Sina Selina	90
Halumae Muriel	157.5
Kwanga Esther	0
Alatala Grace Evalyn	90
Kala Jessy 	180
Hikinao Dalcy 	90
Baulo John	90
Spillius Balinda	180
Ngivalasi Neverlyn 	0
Junior Elifau Eddie 	165
Ramofafia David	67.5
Seimoana Elizabeth 	90
Kasukea Weape Meverlyn 	75
Fiku Siapu Florence	172.5
Ino Sylvia 	165
Futia Maery	105
Walani Sheila	120
Parkinson Moses	82.5
Aigah Jerol	90
Faifu Kate	82.5
Mara Joy Hadassah	82.5
Nisha Joy 	180
Roko Joyce	165
Salu Linma	67.5
Pavu N Salina	165
Maehorana Renetta 	180
Luis Marion	135
Noli M Mary	82.5
Hou Rose Diana	135
Hasi Delma	0
Toku Odikana 	90
Tiba John 	90
Anilafa Amasia Davy	180
Mena'a Margaret	105
Masura Hellen	82.5
O'oi Jerlyn	150
Vuthia Ngelea Bounty	82.5
Honihuitoro Lovelyn	82.5
Sorumana Don 	90
Hadobola Augustine	82.5
Afia Anisca	82.5
Batalididi Joycelyn 	82.5
Moale Jenny	90
Gordon Doncy	165
Sunaone Daledan Chris	180
Gasibule Zebrina Joy	90
Leni Simon Junior	90
Basu Ivory	82.5
Ariki Bareth 	90
Muiri'i Marisha 	135
Kalae Junior	90
Saeve Rosina	90
Anilafa Oge Adon 	75
Makania Esther 	180
Kiini Barbra 	67.5
Ruru Rose	97.5
Kemangava Pretty Lovelyn	82.5
Donga Eddie Alisha	45
Gu'ufo'oa Jnr Jock	180
Maite Austin	180
Ieva Helmah	90
Baniatawa Kramon	60
Fiulawa Niute'e Jimmy 	180
Rau Samantha	75
Kuper Koi Robert	67.5
Nasihunu Varinah 	90
Kanaoli Jerolyn	97.5
Lago Hansol	0
Elson Hezishel	52.5
Tepai Ninah	120
Nego Joddy	0
Tekosi Bravelyn	82.5
Riitefia Justin 	180
Waiwori Lynette	60
Titiri Simmy	52.5
Mesepitu Tarepala Tonia	150
Deve Haoia Gloria	127.5
Siau Tracy	180
Takarii Margret	180
Roosevelt Genesis	90
Melapi Junior	82.5
Ekotani Kefa William	180
Elega John	82.5
Monohoru Senrose	180
Honi Greyleen	7.5
Lio Ella	150
Hivapule Rodney	135
Pio Dava Frank Junior	180
Rasini Fagana Susan	180
Vaeto Cranolyn	150
Panda Clinton	90
Hadosaia Greyleen	52.5
Ouou Stacey	90
Papage Barbra	90
Dao Piqu Florence	180
Mamata Jordan	90
Taisia Tahirih Zaynab	150
Manetoali Alice	90
Tulumae Wesley	127.5
Paulsen Alexander	60
Nasihunu Sharon	105
Angitau Silas	165
Tagalegaina Jahd Eugyn	90
Fernandez Hadassah Fragrance	180
`.trim();

const norm = (s) =>
  String(s || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/,/g, "");

function parseTargets() {
  const map = new Map();
  for (const line of TARGET_LINES.split("\n")) {
    const t = line.trim();
    if (!t) continue;
    const m = t.match(/^(.+?)[\t\s]+([\d.]+)\s*$/);
    if (!m) continue;
    const name = m[1].trim();
    const target = parseFloat(m[2]);
    if (!Number.isFinite(target)) continue;
    map.set(norm(name), target);
  }
  return map;
}

const tierAmount = (t) => (t === 2 ? 15 : t === 1 ? 7.5 : 0);

/** Minimize |sum - target|; tie-break prefer sum closer to target from below then lex */
function bestTiersBruteForce(dayValues, target) {
  const n = dayValues.length;
  const working = [];
  for (let i = 0; i < n; i++) {
    const h = parseFloat(String(dayValues[i] ?? "").replace(/,/g, "")) || 0;
    if (h > 0) working.push(i);
  }
  const W = working.length;
  const tiers = Array(n).fill(0);
  if (W === 0) return { tiers, sum: 0 };

  let bestErr = Infinity;
  let bestSum = -1;
  let bestTiers = tiers;

  const tryAssign = (idx, assign) => {
    if (idx === W) {
      let sum = 0;
      for (let j = 0; j < W; j++) {
        sum += tierAmount(assign[j]);
      }
      const err = Math.abs(sum - target);
      if (err < bestErr || (err === bestErr && sum > bestSum)) {
        bestErr = err;
        bestSum = sum;
        bestTiers = Array(n).fill(0);
        for (let j = 0; j < W; j++) {
          bestTiers[working[j]] = assign[j];
        }
      }
      return;
    }
    for (const t of [0, 1, 2]) {
      assign.push(t);
      tryAssign(idx + 1, assign);
      assign.pop();
    }
  };
  tryAssign(0, []);

  let sum = 0;
  for (let i = 0; i < n; i++) {
    const h = parseFloat(String(dayValues[i] ?? "").replace(/,/g, "")) || 0;
    if (h <= 0) continue;
    sum += tierAmount(bestTiers[i]);
  }
  return { tiers: bestTiers, sum };
}

function main() {
  const targetsByNorm = parseTargets();
  const employees = JSON.parse(fs.readFileSync(DEVICE, "utf8"));
  const idToTarget = new Map();

  for (const emp of employees) {
    const key = norm(emp.names);
    if (targetsByNorm.has(key)) {
      idToTarget.set(String(emp.employeeId), targetsByNorm.get(key));
    }
  }

  const unmatched = [];
  for (const [nameKey, target] of targetsByNorm) {
    let found = false;
    for (const emp of employees) {
      if (norm(emp.names) === nameKey) {
        found = true;
        break;
      }
    }
    if (!found) unmatched.push(`${nameKey} => ${target}`);
  }
  if (unmatched.length) {
    console.warn("Unmatched names:");
    unmatched.forEach((u) => console.warn(" ", u));
  }

  const manual = JSON.parse(fs.readFileSync(MANUAL, "utf8"));
  let updated = 0;

  for (const periodData of Object.values(manual)) {
    if (!periodData || typeof periodData !== "object") continue;
    for (const [eid, entry] of Object.entries(periodData)) {
      if (!entry || typeof entry !== "object") continue;
      const target = idToTarget.get(String(eid));
      if (target === undefined) continue;
      const dayValues = entry.dayValues;
      if (!Array.isArray(dayValues) || dayValues.length === 0) continue;

      const { tiers } = bestTiersBruteForce(dayValues, target);
      entry.conveyanceDayTiers = tiers;
      entry.conveyanceAll = target;
      entry.conveyanceFixed = true;
      updated++;
    }
  }

  fs.writeFileSync(MANUAL, JSON.stringify(manual, null, 2) + "\n", "utf8");
  console.log(`Updated ${updated} rows (${idToTarget.size} employees × periods); conveyanceFixed=true, conveyanceAll=target.`);
}

main();
