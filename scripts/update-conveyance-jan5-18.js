#!/usr/bin/env node
/**
 * Updates conveyance allowance (conveyanceAll) for Jan 5-18 fortnight.
 * Format: Name \t Amount (blank = 0)
 */

const fs = require('fs');
const path = require('path');

const FORTNIGHT = '2026-01-05_2026-01-18';

const DATA = `TANEKO Sandra	 180 
MILTON Ellen	 83 
ARUOMEA Christina	 165 
SUIMAEA, Rachel S. 	 90 
RUKUIWAQA Moffat	 90 
FANASIA, Gretal 	 83 
RUKASI, Florence	 68 
SIUNARII, Alison	 180 
OGE, Marvin	 45 
PENIOP Clement	 135 
NAPS Patteson	 165 
TOVAGETO Derrick	 83 
TALUASI Elizabeth	 180 
LEGUMANA Titus	 90 
BUNIA Cleophas	 180 
BELIGA Jenny	 180 
JULIAN Salote	 135 
MANU Rose	90
RIKO Annette	90
BELO Alick	90
NE'E Glenda	90
ADI Joana	90
HAMBALU Lorina	60
KWANAFIA Lovelyn	37.5
TATAU Enest	180
LONGANIMALA Ben	75
Kuper Yvonne	90
ANISI Celesty	90
PITUMANA Madlyn	150
WAKI Frank 	180
GAROSEPI FAY Veronica	180
SIATA ALICK EDDIMOND 	105
LUI Philip 	0
TALAI Martin 	82.5
IDU Pricilla	165
Sina Selina	82.5
Halumae Muriel	180
Kwanga Esther	90
Alatala Grace Evalyn	75
Kala Jessy 	180
Hikinao Dalcy 	105
Baulo John	82.5
Spillius Balinda	165
Ngivalasi Neverlyn 	75
Junior Elifau Eddie 	150
Ramofafia David 	82.5
Seimoana Elizabeth 	75
Kasukea Weape Meverlyn 	165
Fiku Siapu Florence 	90
Ino Sylvia 	180
Futia Maery	60
Walani Sheila	165
Parkinson Moses 	135
Aigah Jerol	90
Faifu Kate	67.5
Mara Joy Hadassah	90
Nisha Joy 	135
Roko Joyce	180
Salu Linma	82.5
Pavu N Salina 	180
Maehorana Renetta 	180
Luis Marion	60
Noli M Mary	67.5
Hou Rose Diana	120
Hasi Delma	0
Toku Odikana 	90
Tiba John 	75
Anilafa Amasia Davy	180
Mena'a Margaret	150
Masura Hellen	180
O'oi Jerlyn	180
Vuthia Ngelea Bounty	75
Honihuitoro Lovelyn	82.5
Sorumana Don 	90
Hadobola Augustine 	82.5
Afia Anisca	90
Batalididi Joycelyn 	82.5
Moale Jenny	15
Gordon Doncy	180
Sunaone Daledan Chris	180
Gasibule Zebrina Joy	120
Leni Simon Junior	90
Basu Ivory	90
Ariki Bareth 	82.5
Muiri'i Marisha 	45
Kalae Junior	82.5
Saeve Rosina	75
Anilafa Oge Adon 	150
Makania Esther 	180
Kiini Barbra 	0
Ruru Rose	105
Kemangava Pretty Lovelyn	90
Donga Eddie Alisha	22.5
Gu'ufo'oa Jnr Jock	135
Maite Austin	180
Ieva Helmah	37.5
Baniatawa Kramon	90
Fiulawa Niute'e Jimmy 	180
Uiga Sarah 	0
Nerry Jossephil	15
Rau Samantha	105
Fernandez Betotina Marguerita	165
Kuper Koi Robert	82.5
Nasihunu Varinah 	82.5
Kanaoli Jerolyn	7.5
Lago Hansol	82.5
Elson Hezishel	105
Tepai Ninah	60
Nego Joddy	127.5
Tekosi Bravelyn	0
Riitefia Justin 	120
Waiwori Lynette	75
Titiri Simmy	75
Mesepitu Tarepala Tonia	150
Deve Haoia Gloria	180
Siau Tracy	180
Takarii Margret	180
Roosevelt Genesis	67.5
Melapi Junior	0
Ekotani Kefa William	180
Elega John	52.5
Monohoru Senrose	180
Honi Greyleen	82.5
Parangaina William	0
Lio Ella	165
Sara Cecilia	75
Hivapule Rodney	135
Pio Dava Frank Junior	180
Rasini Fagana Susan	180
Vaeto Cranolyn	127.5
Panda Clinton	180
Hadosaia Greyleen	82.5
Ouou Stacey	90
Kala Doreen	45
Papage Barbra	90
Dao Piqu Florence	180
Mamata Jordan	52.5
`;

function normalizeName(s) {
  return (s || '').trim().replace(/\s+/g, ' ');
}

const deviceDataPath = path.join(__dirname, '../server/device-data.json');
const sheetPath = path.join(__dirname, '../server/attendance-sheet-manual.json');

const employees = JSON.parse(fs.readFileSync(deviceDataPath, 'utf8'));
const nameToId = new Map();
employees.forEach((e) => {
  const n = normalizeName(e.names);
  if (n) nameToId.set(n, String(e.employeeId));
  nameToId.set(n.toLowerCase(), String(e.employeeId));
});

const sheet = JSON.parse(fs.readFileSync(sheetPath, 'utf8'));
if (!sheet[FORTNIGHT]) sheet[FORTNIGHT] = {};

let updated = 0;
let notFound = [];

const lines = DATA.trim().split('\n');
for (const line of lines) {
  const parts = line.split('\t').map((p) => p.trim());
  const name = parts[0];
  const convVal = parts[1] || parts.slice(1).join(' ').trim() || '0';
  if (!name) continue;

  const n = normalizeName(name);
  const id = nameToId.get(n) || nameToId.get(n.toLowerCase());
  if (!id) {
    notFound.push(name);
    continue;
  }

  const conveyance = parseFloat(convVal) || 0;

  const existing = sheet[FORTNIGHT][id] || { dayValues: Array(14).fill('') };
  sheet[FORTNIGHT][id] = {
    ...existing,
    conveyanceAll: conveyance,
  };
  updated++;
}

fs.writeFileSync(sheetPath, JSON.stringify(sheet, null, 2), 'utf8');
console.log(`Updated conveyance for ${updated} employees (Jan 5-18).`);
if (notFound.length) {
  console.log('Names not found:', notFound.join(', '));
}
