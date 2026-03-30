#!/usr/bin/env node
/**
 * Updates OT (totalOvertime) for Jan 5-18 fortnight from name-value list.
 * Format: Name \t OT (blank = 0)
 */

const fs = require('fs');
const path = require('path');

const FORTNIGHT = '2026-01-05_2026-01-18';

const OT_DATA = `TANEKO Sandra	
MILTON Ellen	
ARUOMEA Christina	
SUIMAEA, Rachel S. 	
RUKUIWAQA Moffat	
FANASIA, Gretal 	
RUKASI, Florence	
SIUNARII, Alison	
OGE, Marvin	
PENIOP Clement	
NAPS Patteson	 0.50 
TOVAGETO Derrick	
TALUASI Elizabeth	 3.00 
LEGUMANA Titus	
BUNIA Cleophas	
BELIGA Jenny	
JULIAN Salote	
MANU Rose	
RIKO Annette	
BELO Alick	
NE'E Glenda	
ADI Joana	
HAMBALU Lorina	 2.00 
KWANAFIA Lovelyn	
TATAU Enest	
LONGANIMALA Ben	
Kuper Yvonne	
ANISI Celesty	
PITUMANA Madlyn	
WAKI Frank 	
GAROSEPI FAY Veronica	
SIATA ALICK EDDIMOND 	
LUI Philip 	
TALAI Martin 	
IDU Pricilla	
Sina Selina	
Halumae Muriel	
Kwanga Esther	
Alatala Grace Evalyn	
Kala Jessy 	
Hikinao Dalcy 	
Baulo John	
Spillius Balinda	
Ngivalasi Neverlyn 	
Junior Elifau Eddie 	
Ramofafia David 	
Seimoana Elizabeth 	
Kasukea Weape Meverlyn 	
Fiku Siapu Florence 	
Ino Sylvia 	 6.00 
Futia Maery	
Walani Sheila	
Parkinson Moses 	 1.00 
Aigah Jerol	
Faifu Kate	
Mara Joy Hadassah	
Nisha Joy 	
Roko Joyce	
Salu Linma	
Pavu N Salina 	
Maehorana Renetta 	 2.50 
Luis Marion	
Noli M Mary	
Hou Rose Diana	
Hasi Delma	
Toku Odikana 	
Tiba John 	
Anilafa Amasia Davy	
Mena'a Margaret	
Masura Hellen	
O'oi Jerlyn	
Vuthia Ngelea Bounty	
Honihuitoro Lovelyn	
Sorumana Don 	
Hadobola Augustine 	
Afia Anisca	
Batalididi Joycelyn 	
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
Anilafa Oge Adon 	 1.00 
Makania Esther 	
Kiini Barbra 	
Ruru Rose	
Kemangava Pretty Lovelyn	
Donga Eddie Alisha	
Gu'ufo'oa Jnr Jock	
Maite Austin	 1.00 
Ieva Helmah	
Baniatawa Kramon	
Fiulawa Niute'e Jimmy 	
Uiga Sarah 	
Nerry Jossephil	
Rau Samantha	
Fernandez Betotina Marguerita	 4.50 
Kuper Koi Robert	
Nasihunu Varinah 	
Kanaoli Jerolyn	
Lago Hansol	
Elson Hezishel	
Tepai Ninah	
Nego Joddy	
Tekosi Bravelyn	
Riitefia Justin 	 1.00 
Waiwori Lynette	
Titiri Simmy	
Mesepitu Tarepala Tonia	
Deve Haoia Gloria	
Siau Tracy	
Takarii Margret	
Roosevelt Genesis	 7.00 
Melapi Junior	
Ekotani Kefa William	
Elega John	
Monohoru Senrose	
Honi Greyleen	
Parangaina William	
Lio Ella	
Sara Cecilia	
Hivapule Rodney	 3.00 
Pio Dava Frank Junior	 3.00 
Rasini Fagana Susan	
Vaeto Cranolyn	
Panda Clinton	
Hadosaia Greyleen	
Ouou Stacey	
Kala Doreen	
Papage Barbra	
Dao Piqu Florence	
Mamata Jordan	
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

const lines = OT_DATA.trim().split('\n');
for (const line of lines) {
  const parts = line.split('\t').map((p) => p.trim());
  const name = parts[0];
  const otVal = parts[1] || parts.slice(1).join(' ').trim() || '0';
  if (!name) continue;

  const n = normalizeName(name);
  const id = nameToId.get(n) || nameToId.get(n.toLowerCase());
  if (!id) {
    notFound.push(name);
    continue;
  }

  const ot = parseFloat(otVal) || 0;

  const existing = sheet[FORTNIGHT][id] || { dayValues: Array(14).fill('') };
  sheet[FORTNIGHT][id] = {
    ...existing,
    totalOvertime: ot,
  };
  updated++;
}

fs.writeFileSync(sheetPath, JSON.stringify(sheet, null, 2), 'utf8');
console.log(`Updated OT for ${updated} employees (Jan 5-18).`);
if (notFound.length) {
  console.log('Names not found:', notFound.join(', '));
}
