#!/usr/bin/env node
/**
 * Updates ONLY the dayValues (attendance) for Feb 16 - Mar 1 fortnight.
 * Preserves existing OT, PH/DO, sick, annual, conveyance.
 * Format: Name \t day0 \t day1 ... \t day13
 */

const fs = require('fs');
const path = require('path');

const FORTNIGHT = '2026-02-16_2026-03-01';

const RAW = `TANEKO Sandra	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5	
MILTON Ellen	7.5	7.5	7.5	7.5	7.5			7.5	7.5	7	7.5	7.5		7.5
ARUOMEA Christina	7.5	3.5		7.5	6.5	7.5		7	7.5	7	7	7	7.5	
SUIMAEA, Rachel S. 	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5	
RUKUIWAQA Moffat	7	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5	7.5	7.5		7.5
FANASIA, Gretal 	7.5	7.5		7.5	7.5		7.5	7.5	7.5			7.5	7.5	7.5
RUKASI, Florence	6.5		7.5	7.5	7.5	7.5	6.5	7.5	7	7.5	7.5	7.5	7	
SIUNARII, Alison	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5
OGE, Marvin	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5	
PENIOP Clement	7.5	7.5	7.5	7.5	7.5			7.5	7.5	7.5	7.5	7.5		
NAPS Patteson	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5	
TOVAGETO Derrick		7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5	7	
TALUASI Elizabeth	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5
LEGUMANA Titus					7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5
BUNIA Cleophas	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5	
BELIGA Jenny		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5
JULIAN Salote	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5
MANU Rose	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5
RIKO Annette	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5
BELO Alick	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5	
NE'E Glenda	7.5	7.5	7.5	7.5	7.5		7	7.5	7.5	7.5	7			7.5
ADI Joana	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5	
HAMBALU Lorina	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5	
KWANAFIA Lovelyn	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5
TATAU Enest	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5
LONGANIMALA Ben	7.5				7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5
Kuper Yvonne	7.5	6	7.5	7.5					7.5	7.5	7.5	7.5		7.5
ANISI Celesty	7.5	7.5	7		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5
PITUMANA Madlyn	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5
WAKI Frank 	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5	
GAROSEPI FAY Veronica	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5	
SIATA ALICK EDDIMOND 		6.5	7.5	7	7.5	7	7.5		7.5	7.5	7	7.5	7.5	7.5
LUI Philip 	6	7	7	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		
TALAI Martin 		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5
IDU Pricilla	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5	
Sina Selina	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5		7.5
Halumae Muriel	7.5	7.5	7.5	7.5	7.5			7.5	7.5	7.5	7.5	7.5	7.5	
Kwanga Esther	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5		7.5
Alatala Grace Evalyn	7.5	7.5		7.5	7.5	7.5	7.5	6.5	7.5	7.5	7.5	7.5		7.5
Kala Jessy 	7.5	7.5	7.5	7.5	7		7.5	7.5	7.5	7.5	7.5			7.5
Hikinao Dalcy 	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5
Baulo John	7.5		7.5	7.5	7.5	7.5	7.5	7.5	7.5	7.5	7.5	7.5		7.5
Spillius Balinda	7.5	7.5		7		7.5		7.5	7.5	7	6.5	7.5	7	
Ngivalasi Neverlyn 	7	7.5	7	7.5	7.5			7.5	7.5	7.5	7	7.5	7.5	
Junior Elifau Eddie 	11	9	7	7.5	8	7.5	7.5	7.5		7		6.5	7.5	7.5
Ramofafia David 	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5		7.5	7.5	7.5	
Seimoana Elizabeth 	7.5	7.5	7.5		7.5	7.5	7.5	7	7.5	7.5		7.5	7.5	7.5
Kasukea Weape Meverlyn 	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5
Fiku Siapu Florence 	7.5	6.5	7	7.5	6.5		7.5	7.5	7.5	7	7.5	7.5		7.5
Ino Sylvia 											7.5	7.5	7.5	
Futia Maery	7.5	7	6.5		7.5		7	7	7.5	7.5	7.5	7.5	7.5	
Walani Sheila		7	7.5	7.5	7.5	7	7.5	7	7.5		7.5	7	7.5	7.5
Parkinson Moses 	7.5	13	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5	
Aigah Jerol	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5	
Faifu Kate	7.5	7.5		7.5	7.5	7.5	7.5	7.5		7.5	7	7.5	7.5	7
Mara Joy Hadassah	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5	
Nisha Joy 	7.5	7.5	7.5	7.5	7.5	7.5		6	7.5	7.5	7.5	7.5	7.5	
Roko Joyce	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5
Salu Linma	7.5		7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5	7.5	7.5
Pavu N Salina 	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5	
Maehorana Renetta 	7.5		7.5	7.5	8.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5
Luis Marion	7.5		7.5	8.5	7.5	7.5		7.5	7.5	7.5	7	7.5	7.5	
Noli M Mary	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5	
Hou Rose Diana	7.5	7.5	7.5	7.5	7.5			7.5	7.5	7.5	7.5	7.5		
Hasi Delma		5	7.5	7.5	7.5		7.5	7.5						
Toku Odikana 	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5
Tiba John 	7		7.5		7.5	7.5	7.5	7.5		7.5	7	7.5	7.5	7.5
Anilafa Amasia Davy	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	14		7.5	7.5	7.5
Mena'a Margaret	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5
Masura Hellen		7.5	7.5		7.5	7.5	7.5	7.5	7.5				7.5	
O'oi Jerlyn	7.5	7.5	7	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5
Vuthia Ngelea Bounty	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7	7	
Honihuitoro Lovelyn	7.5	7.5	7.5	7.5	7.5			7.5	7.5	7.5	7.5	7.5		7.5
Sorumana Don 	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5
Hadobola Augustine 	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5	
Afia Anisca	7.5	7.5	4.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5
Batalididi Joycelyn 	7.5	7.5	7	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5
Moale Jenny	7.5	6.5	6		7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5
Gordon Doncy	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5
Sunaone Daledan Chris	7	7.5	7.5	7.5	7.5			7.5	7.5	7.5	7.5	7.5	7.5	
Gasibule Zebrina Joy	7.5	7.5	7.5	7.5	7.5	7.5		7.5			7.5	7.5	7.5	7.5
Leni Simon Junior			7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5
Basu Ivory		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5
Ariki Bareth 	7.5	7	7.5	7	7.5		7.5	7.5	7.5	7	7.5	7.5		7.5
Muiri'i Marisha 		6.5	7.5	4.5	7.5	7.5	7.5				7		7.5	7.5
Kalae Junior	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5			
Saeve Rosina		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5		7.5
Anilafa Oge Adon 	7.5	9	7.5	7.5	10	7.5		9	9.5	7.5	7	7.5	7.5	
Makania Esther 		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	13.5
Kiini Barbra 		7.5	7.5	7.5	7.5		7.5		7.5	7.5	7.5	7.5	7.5	
Ruru Rose		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	4
Kemangava Pretty Lovelyn	7.5	7	7.5	7	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5
Donga Eddie Alisha		7.5												
Gu'ufo'oa Jnr Jock	7.5	7.5	7.5					7.5	7.5	7.5				7.5
Maite Austin	7.5	7.5	7.5	8.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5	
Ieva Helmah	7.5	7.5	7.5	7.5	7.5			7.5	7.5	7.5	7.5	7.5		7.5
Baniatawa Kramon	7.5		7.5	7.5		7.5	7	7.5	7.5		7.5	7.5	7.5	7.5
Fiulawa Niute'e Jimmy 	11	8.5	7	7	7.5	6.5	7.5	7	6.5		7		7.5	6.5
Rau Samantha	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5	7.5	7	7.5	7.5	
Kuper Koi Robert	7.5	7.5						7.5	7.5	7.5	7.5			7
Nasihunu Varinah 												7.5	7.5	7.5
Kanaoli Jerolyn	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5
Lago Hansol	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5
Elson Hezishel												7.5	7.5	7.5
Tepai Ninah		7	7.5	7.5	7.5		7.5		7.5	7.5	7.5	7.5		
Nego Joddy	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5		7.5	7.5	7.5
Tekosi Bravelyn	7.5	7.5	7.5		7.5		7.5	7.5	7.5	7.5		7.5	7.5	7.5
Riitefia Justin 	8.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5	7.5
Waiwori Lynette		7.5		7.5	7.5	7.5	7.5		7.5	7.5	6.5	6.5		7.5
Titiri Simmy	7.5	7.5	7.5		7.5		7.5		7.5	7.5		7.5	7.5	
Mesepitu Tarepala Tonia	7.5	7.5	7	7.5	7	7.5		7.5	6.5	7	7.5	7.5	4.5	
Deve Haoia Gloria			7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5	6.5
Siau Tracy	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5	
Takarii Margret	7	7.5	7.5		7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5	
Roosevelt Genesis	7.5	7.5			7.5	7.5	7.5		7.5	7.5		7.5	7.5	7.5
Melapi Junior									7.5	7.5	7.5	7.5	7.5	7.5
Ekotani Kefa William	7.5	7.5	7.5		7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5
Elega John		7.5			7.5	7.5			7.5	7.5	7.5	7.5	7.5	7.5
Monohoru Senrose	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5	
Honi Greyleen			7.5		7.5	7.5			7.5	7.5			7	
Lio Ella	7.5	7.5	7.5	7	7.5	7.5		7.5	7	7.5	7.5	7.5	7.5	
Hivapule Rodney	7.5	7.5	7.5	7	7.5		7.5	7.5		7.5	7.5	7.5	7	7.5
Pio Dava Frank Junior	7.5	7.5	8.5		9.5	7	7	7	7	7.5		4.5	7	
Rasini Fagana Susan			7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5
Vaeto Cranolyn		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5
Panda Clinton	7.5		7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5	
Hadosaia Greyleen	7.5		7.5	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	
Ouou Stacey	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5	
Papage Barbra	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5
Dao Piqu Florence	7.5	7.5	7.5	7.5	7.5	4		7.5	7.5	7.5	7.5	7.5	7.5	
Mamata Jordan	7.5		7.5	7	7.5		7.5	7.5		7	7.5	6.5	7.5	7.5
Taisia Tahirih Zaynab	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5	
Manetoali Alice	7	7.5	7.5		7.5			7.5	7.5	7.5		7.5	7.5	7.5
Tulumae Wesley	7	7.5	7.5	7		7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5
Paulsen Alexander	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5
Nasihunu Sharon			7	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5
Angitau Silas				7.5	7.5	7.5	7.5	7.5	7.5		7.5		7.5	7.5
Tagalegaina Jahd Eugyn								7.5	7.5	7.5	7.5	7.5		7.5
Fernandez Hadassah Fragrance							7.5	6.5	7	7.5	7.5	6.5		10.5
`;

function normalizeName(s) {
  return (s || '').trim().replace(/\s+/g, ' ');
}

const devicePath = path.join(__dirname, '../server/device-data.json');
const sheetPath = path.join(__dirname, '../server/attendance-sheet-manual.json');

const employees = JSON.parse(fs.readFileSync(devicePath, 'utf8'));
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

const lines = RAW.trim().split('\n');
for (const line of lines) {
  const parts = line.split('\t').map((p) => p.trim());
  const name = parts[0];
  const dayVals = parts.slice(1, 15);
  if (!name) continue;

  const n = normalizeName(name);
  const id = nameToId.get(n) || nameToId.get(n.toLowerCase());
  if (!id) {
    notFound.push(name);
    continue;
  }

  const dayValues = Array(14).fill('');
  for (let i = 0; i < 14; i++) {
    const v = dayVals[i];
    dayValues[i] = (v === '' || v == null) ? '' : String(v);
  }

  const existing = sheet[FORTNIGHT][id] || {};
  sheet[FORTNIGHT][id] = {
    ...existing,
    dayValues,
  };
  updated++;
}

fs.writeFileSync(sheetPath, JSON.stringify(sheet, null, 2), 'utf8');
console.log('Updated attendance for ' + updated + ' employees (Feb 16 - Mar 1).');
if (notFound.length) console.log('Names not found:', notFound.join(', '));
