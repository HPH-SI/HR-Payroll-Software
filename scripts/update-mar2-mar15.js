#!/usr/bin/env node
/**
 * Updates attendance for Mar 2 - 15, 2026.
 * Format: Name \t day0..day13 \t OT \t PH/DO \t Sick \t Annual \t Conveyance
 */

const fs = require('fs');
const path = require('path');

const FORTNIGHT = '2026-03-02_2026-03-15';

const RAW = `TANEKO Sandra	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5						180
MILTON Ellen	7.5	7.5	7		7.5		7.5	6		7.5	7.5	7.5		7.5					75
ARUOMEA Christina	6.5	7	7	7	7.5	7.5		6.5	7.5	7	7	6.5	6.5						180
SUIMAEA, Rachel S. 	7.5	7.5	7.5	7.5	7.5	7.5			7.5	7.5	7.5	7.5	7.5						165
RUKUIWAQA Moffat	7.5	7.5	7.5	6.5	7.5		7.5	7.5	7.5	7.5	7	7.5		7.5			2		75
FANASIA, Gretal 	7.5	7		7.5	7.5		7.5	7	7.5	7.5	7	7.5	7.5	7.5					90
RUKASI, Florence	6.5	7	7.5	7	7.5	7.5			7.5	7	7.5	7.5	7.5	6.5					90
SIUNARII, Alison	7	7.5	6.5	7.5	7.5		7.5	7.5	7	7.5	7.5	7.5		7.5					180
OGE, Marvin	7.5	7.5	7.5	7.5	7.5	7		7.5	7.5	7.5	7.5	7.5	7.5						90
PENIOP Clement	7.5	7.5		7.5	7.5	7.5	7.5			7.5	7.5	7.5	7.5	7.5					82.5
NAPS Patteson	7.5	7.5	7.5	7.5	12.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		5				180
TOVAGETO Derrick	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5					90
TALUASI Elizabeth	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5					180
LEGUMANA Titus		7.5	7.5	7.5		7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5					82.5
BUNIA Cleophas	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5						180
BELIGA Jenny		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5					180
JULIAN Salote	7.5		7	7.5	7.5	7.5	7.5	7.5		6.5	7.5	7.5	7.5	7.5					180
MANU Rose	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5					180
RIKO Annette	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5					180
BELO Alick	7.5	7.5	7.5	7		7.5	7.5	7.5	7.5	7.5	7.5	7.5	7.5						180
NE'E Glenda	6.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5					90
ADI Joana	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5						90
HAMBALU Lorina	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5						90
KWANAFIA Lovelyn	7.5	7.5	7.5	7.5	7.5		7	7.5	7.5	7.5	7.5		7.5	7.5					82.5
TATAU Enest	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5			7.5	7.5					165
LONGANIMALA Ben	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5					90
Kuper Yvonne	7.5	7.5	7.5				7.5	7.5	7.5	7.5	7.5	7.5							67.5
ANISI Celesty	7.5	7.5	7.5		7.5	7.5	6.5	7.5	7.5	7.5		6.5	7	7.5			2		75
PITUMANA Madlyn	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5					180
WAKI Frank 	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5						180
GAROSEPI FAY Veronica	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7	7.5	7.5	7.5						180
SIATA ALICK EDDIMOND 		7.5	7.5	7.5			7.5		7.5	7.5	7	7	7	7.5					75
LUI Philip 	7.5	7.5	7.5	6.5	6.5		7.5	7.5	7.5	7.5	7.5		7.5	7.5					135
TALAI Martin 		7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5	7.5					90
IDU Pricilla	7.5	7.5	7.5	7.5	7	7.5		7.5	7.5	7.5	7.5	7.5	7.5						180
Sina Selina	7.5	3.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5					90
Halumae Muriel	7.5	7.5	7.5	7.5	7	7.5			7.5	7.5	7.5	7.5	7.5						157.5
Kwanga Esther																			0
Alatala Grace Evalyn	7.5	7.5	7.5	7	7.5		7.5	7.5	7.5	7.5	7.5	7.5	7.5						90
Kala Jessy 	7.5	7	7.5	7	7.5		7.5	7.5	7.5	7	7.5	7		7					180
Hikinao Dalcy 	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7	7		7.5	7.5					90
Baulo John	7.5	7.5	7.5	7.5	9	7.5	7.5	7.5	7.5	7.5	7.5	7.5		7.5	1.5	7.5			90
Spillius Balinda	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5						180
Ngivalasi Neverlyn 																			0
Junior Elifau Eddie 		7	6	7.5	6.5	7	7.5	7	7			7	7	7	7					165
Ramofafia David 	4.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5		7.5				2		67.5
Seimoana Elizabeth 	6	7.5	6.5		7.5	7.5	7.5	7.5	7.5	6.5		7.5	7.5	7.5					90
Kasukea Weape Meverlyn 	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5			2		75
Fiku Siapu Florence 	7.5	7.5	7	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5					172.5
Ino Sylvia 	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5				1		165
Futia Maery	7	7.5	7.5							7.5	4.5		7.5	7.5					105
Walani Sheila	6.5	7.5	7.5	7.5	7.5	7.5		7	7		7.5	7.5	7.5	7.5					120
Parkinson Moses 	7.5	7.5	7.5	7.5	7.5	7.5		7.5	12.5	12	7.5	7.5	7.5		9.5		2		82.5
Aigah Jerol	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5						90
Faifu Kate	7.5	7.5		9.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7	7.5	2		1		82.5
Mara Joy Hadassah	7.5	7.5	7.5	7.5	7.5			7.5	7.5		7.5	7.5	7.5	7.5					82.5
Nisha Joy 	7.5	7.5	7	7.5	7.5	7.5		7.5	7	7	7.5	7	7.5						180
Roko Joyce	7.5	7.5	7.5	7		7.5	7.5	7.5	7.5	7.5	7		7.5						165
Salu Linma	7.5		7.5	7.5	7.5		7.5	7.5		7.5	7.5	7.5	7	7.5			2		67.5
Pavu N Salina 	7.5	7	7.5	7.5	7.5	7.5			7.5	7.5	7.5	7.5	7.5						165
Maehorana Renetta 	7.5		7.5	7.5	7.5	7.5	7.5	9		9	7.5	7.5	7.5	7.5	3				180
Luis Marion	7.5	7.5	7.5	7	7.5		7.5		7.5	7.5	7.5	7.5		7.5					135
Noli M Mary	7.5	7.5	7.5	7.5	7.5	7.5			7.5	7.5	7.5	7.5	7.5						82.5
Hou Rose Diana	7.5		7.5	7.5	7.5			7.5	7.5	7.5	7.5	7.5							135
Hasi Delma																			0
Toku Odikana 		7.5	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5				15	90
Tiba John 	7.5		7.5	7.5	7.5	7	7.5	7.5		7.5	7.5	7.5	7.5	7.5					90
Anilafa Amasia Davy	7	7.5	7.5	7		7	7.5	7	7	7.5		7	7.5	7.5					180
Mena'a Margaret	7.5	7.5	7.5		7.5	7.5	7.5	6.5	6.5		7.5	6.5	7.5	7.5					105
Masura Hellen	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5		7.5					82.5
O'oi Jerlyn	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5			2		150
Vuthia Ngelea Bounty	8.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5		7.5	7.5	7.5		1				82.5
Honihuitoro Lovelyn	7.5	7.5	7.5	7.5	7		7.5	7.5	7.5	7.5	7.5	7.5							82.5
Sorumana Don 	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7					90
Hadobola Augustine 	7.5	7.5	7.5		7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5						82.5
Afia Anisca	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		4.5						82.5
Batalididi Joycelyn 	7.5	7.5	7	7	7.5			7.5	7.5	7	7.5	7.5		7.5					82.5
Moale Jenny	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5					90
Gordon Doncy	7.5	7.5	7.5	7.5	7.5		7.5	7	7.5	7.5	7.5	7.5		7.5			1		165
Sunaone Daledan Chris	7	7.5	7	7	7	7.5		7	7	7.5	7	7.5	7.5						180
Gasibule Zebrina Joy	7.5		7.5	7.5								7.5	7.5	7.5					90
Leni Simon Junior	7.5		7.5	7.5	7	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5				15	90
Basu Ivory		7.5	7.5	7.5	7.5		7.5		7.5	7.5	7.5	7.5	7.5	6.5					82.5
Ariki Bareth 	7.5	7.5	7	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7		7.5					90
Muiri'i Marisha 		7	7.5	7.5	7	7			6.5	7.5		7	7.5	7					135
Kalae Junior	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5					90
Saeve Rosina		7.5	7.5	7	7.5	7	7.5		7.5	7.5	7.5	7.5	7.5						90
Anilafa Oge Adon 	7.5	7	7.5	7.5		7.5		7.5	6.5	7.5		7.5	7.5						75
Makania Esther 		7.5	7.5	7.5	7.5	7.5	13.5		13.5	7.5	7.5	7.5	7.5	7.5	12				180
Kiini Barbra 		7.5	7.5	7.5	7.5	7.5	7.5			7.5	7.5	7.5	7.5	7.5			2		67.5
Ruru Rose		7.5	7.5	7.5		7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5					97.5
Kemangava Pretty Lovelyn	7.5	7.5	7.5	7.5	7.5		6.5	7.5	7.5	7.5	7.5	7.5		7.5					82.5
Donga Eddie Alisha									7.5	7.5	7.5	7.5	7.5	7.5					45
Gu'ufo'oa Jnr Jock	6.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5					180
Maite Austin	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5						180
Ieva Helmah	7.5	7.5	7.5	7.5	7.5		7	7.5	7.5	7.5	7.5	7.5		7					90
Baniatawa Kramon	7.5		7.5		7.5	6.5	6.5	7.5			7.5	6.5	7						60
Fiulawa Niute'e Jimmy 	7	6.5	6.5		7.5	7.5	7.5	7.5	7.5	7	7		7.5	7					180
Rau Samantha	7.5		7.5	7.5	7.5	7.5	7.5	7.5			7.5	7.5	7.5						75
Kuper Koi Robert	7	7.5	7.5	7.5					7.5	7.5	7.5	7.5		7.5					67.5
Nasihunu Varinah 	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5					90
Kanaoli Jerolyn	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5					97.5
Lago Hansol																			0
Elson Hezishel			7.5	7.5	7.5	7.5	7.5	7		7.5	7.5	7.5	7.5	7.5			3		52.5
Tepai Ninah	7.5	7.5		7.5	7.5	7.5	7.5		7.5	7.5	7.5			7.5			2		120
Nego Joddy	7.5	7.5															2	15	0
Tekosi Bravelyn	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5					82.5
Riitefia Justin 	7.5	7.5	7.5	7.5	12.5	7.5		7.5	7.5	7.5	7.5	7.5	6.5		5			15	180
Waiwori Lynette				7.5	7.5		7.5				7.5			1.5					60
Titiri Simmy		7.5	7		7.5	7.5	7.5	7.5				6	7	7.5			2		52.5
Mesepitu Tarepala Tonia		7.5	7.5	7	7.5	7		7	7		7.5	7	7						150
Deve Haoia Gloria	7.5	7.5	7.5	13	13.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		11.5		3		127.5
Siau Tracy	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5						180
Takarii Margret	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5						180
Roosevelt Genesis	7.5	7	7.5		7.5	7.5	7	7.5	7.5	7.5		7.5	7.5	6					90
Melapi Junior		7.5	7.5	7.5		7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5					82.5
Ekotani Kefa William	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5					180
Elega John			7.5	7.5	7.5	7.5	7		7.5	7.5	7.5	7.5	7.5	7.5					82.5
Monohoru Senrose	6.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5						180
Honi Greyleen	7.5																		7.5
Lio Ella	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7	7.5	7.5	7.5	7				2		150
Hivapule Rodney	7		7.5	7.5	12.5	9.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7				135
Pio Dava Frank Junior	6.5	8.5	9.5		9.5	9.5	7.5	8.5	7.5	9.5		8.5	7	7.5	11.5				180
Rasini Fagana Susan		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5					180
Vaeto Cranolyn		7.5	7.5	7.5	7.5	7.5	7.5			7.5	7.5	7	7.5	7.5					150
Panda Clinton	13.5	7.5	7.5	7.5	14	14		7.5	7.5	7.5	7.5	7.5	7.5		19				90
Hadosaia Greyleen	7.5		7.5	7.5	7.5	7.5	7.5	7.5											52.5
Ouou Stacey	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5						90
Papage Barbra	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5					90
Dao Piqu Florence	7.5	7.5	7	7.5	7	7.5		7.5	7	7.5	7.5	7.5	4						180
Mamata Jordan	7.5		6.5	7.5	7.5	7.5	7.5	7		7.5	7.5	7.5	7.5	7.5					90
Taisia Tahirih Zaynab	7.5	2			7.5	7.5		7.5	7	7.5	7.5	7.5	7.5						150
Manetoali Alice	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5						90
Tulumae Wesley		7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5	7.5		7.5					127.5
Paulsen Alexander	7.5	7.5	7.5		7.5			7.5	7.5			7.5							60
Nasihunu Sharon	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5					105
Angitau Silas	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5			7.5	7.5	7.5					165
Tagalegaina Jahd Eugyn	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5					90
Fernandez Hadassah Fragrance	7	7.5	7.5	7.5	7.5		7.5	7.5	8.5	9	7.5	7		7.5	2.5				180
`;

function normalizeName(s) {
  return (s || '').trim().replace(/\s+/g, ' ');
}

function parseNum(s) {
  const v = parseFloat(String(s || '').trim());
  return Number.isFinite(v) ? v : 0;
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
  const tail = parts.slice(-5);
  const otVal = tail[0] || '';
  const phDoVal = tail[1] || '';
  const sickVal = tail[2] || '';
  const annualVal = tail[3] || '';
  const convRaw = (tail[4] || '0').replace(/^-\s*$/, '0');
  const convVal = parseNum(convRaw);
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

  const ot = parseNum(otVal);
  const phDo = phDoVal !== '' ? String(parseNum(phDoVal)) : '';
  const sick = sickVal !== '' ? String(parseNum(sickVal)) : '';
  const annual = annualVal !== '' ? parseNum(annualVal) : 0;

  const existing = sheet[FORTNIGHT][id] || {};
  sheet[FORTNIGHT][id] = {
    ...existing,
    dayValues,
    totalOvertime: ot,
    phDo: phDo !== '' ? phDo : (existing.phDo ?? ''),
    phPay: existing.phPay ?? 0,
    sickDays: sick !== '' ? sick : (existing.sickDays ?? ''),
    annualLeave: annual,
    conveyanceAll: convVal,
    compassionate: existing.compassionate ?? '',
    metLeave: existing.metLeave ?? 0,
  };
  updated++;
}

fs.writeFileSync(sheetPath, JSON.stringify(sheet, null, 2), 'utf8');
console.log('Updated ' + updated + ' employees for Mar 2 - 15, 2026.');
if (notFound.length) console.log('Names not found:', notFound.join(', '));
