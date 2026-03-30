#!/usr/bin/env node
/**
 * Updates attendance for Jan 19 - Feb 1 fortnight.
 * Format: Name \t CostCenter \t day0..day13 \t OT \t Sick \t AnnualLeave \t Conveyance
 */

const fs = require('fs');
const path = require('path');

const FORTNIGHT = '2026-01-19_2026-02-01';

const RAW = `TANEKO Sandra	H K	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5					180
MILTON Ellen	H K	7.5		7.5	7.5	7.5		7.5	7.5		7.5	7	7		7.5				75
ARUOMEA Christina	Finance	7.5	6.5	7	7.5	7.5	7.5		7.5	7.5	7.5	7	7	7			 2 		150
SUIMAEA, Rachel S. 	FBP	7.5	7	7	7.5	7.5	7		7.5	7.5	7.5	7.5	7	7.5					180
RUKUIWAQA Moffat	Security	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7	7.5		7.5				90
FANASIA, Gretal 	H K	7.5	7	7.5	7	7.5	7.5												45
RUKASI, Florence	Security		7	7.5	7.5	7.5	7.5	6.5	7.5	7.5		7.5	7.5	7	7.5				90
SIUNARII, Alison	H K	7.5	7.5	7	7.5	9.5		7.5	7.5	7.5	7	7	7.5		7.5	2			180
OGE, Marvin	FBP	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5					180
PENIOP Clement	Security	7.5	7.5	7.5	7.5		7.5		7.5	7.5	7.5	7.5	7.5	7.5					82.5
NAPS Patteson	POMEC	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5					180
TOVAGETO Derrick	FBP	7.5	7.5	7.5	7.5	7.5		7.5											45
TALUASI Elizabeth	H K	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5				180
LEGUMANA Titus	FBP		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5				90
BUNIA Cleophas	H K	7.5	7.5	7.5	7.5	7.5	7.5		7.5		7.5	7.5	7.5	7.5					165
BELIGA Jenny	H K		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5				180
JULIAN Salote	H K		7.5	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7	7.5				180
MANU Rose	H K												7.5	7.5					30
RIKO Annette	H K											7.5	7.5		7.5				45
BELO Alick	H K											7.5	7.5	7.5					45
NE'E Glenda	FBP	7.5	7.5	7.5	7.5		7.5	7.5	6.5	7	7	7	7.5		7		 2 		75
ADI Joana	FBP	7.5	7.5	7.5	7.5	7.5	7.5		5.5	7.5	7.5	7.5	7.5	7.5			 2 		75
HAMBALU Lorina	H K	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5					90
KWANAFIA Lovelyn	FBP	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5		 1 		82.5
TATAU Enest	H K	7.5	7.5	7.5			7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5				165
LONGANIMALA Ben	FBP	7.5	7.5	7.5		7.5	7.5		7.5	7.5	7.5	7.5			7.5				75
Kuper Yvonne	FBS	7.5	7.5	7.5	7.5	7.5		7.5	7	7.5	7.5	7	7.5		7.5				90
ANISI Celesty	FBP	7.5	7.5	7.5		7.5	7.5		7.5	7.5	7.5		7.5	7.5	7.5		 2 		67.5
PITUMANA Madlyn	H K	7.5	7.5		7.5	7.5	7.5	7	7.5	7.5		7.5	7.5	7.5	7.5				180
WAKI Frank 	Finance	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	8.5	7.5	7.5		1			180
GAROSEPI FAY Veronica	H K	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5					180
SIATA ALICK EDDIMOND 	POMEC		7.5	7.5	7.5	7.5		7.5		7	7.5	7.5	7.5	7.5	7.5				82.5
LUI Philip 	FO				7.5	7		7	7.5	7.5	7.5			7.5					75
TALAI Martin 	Security	7.5	7.5	7.5	7.5			7.5	7.5	7.5	7.5	7.5		7.5	7.5				82.5
IDU Pricilla	H K	7.5	7.5	7.5	7.5	7.5		7.5	6	7.5	7.5	7.5	7.5		7.5				180
Sina Selina	Security	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5				90
Halumae Muriel	FBS	7																	7.5
Kwanga Esther	FBP	7.5		7.5	7.5	7.5	7.5	7.5	7.5	7.5	7.5	7.5	7.5	7.5					90
Alatala Grace Evalyn	FBS	7.5		7.5	7.5	7.5	7.5	7.5	7.5	7.5	6.5	7.5	7.5		7.5				90
Kala Jessy 	H K	7	7.5	7.5	7.5	7		7											180
Hikinao Dalcy 	FO																		0
Baulo John	POMEC	7.5	7.5	7.5	7.5			7.5	7.5	7.5	7.5	7.5	7.5						75
Spillius Balinda	Finance	7.5	7.5	7.5	7.5	7	7		7.5	6.5		7.5	7.5	7.5					165
Ngivalasi Neverlyn 	FBP	7	7.5	7.5	7.5	7.5	7		7.5		7.5	7.5	7	7.5					165
Junior Elifau Eddie 	Admin	5.5	7.5		6.5	6.5	7	7.5	7.5	6	6		6	7.5	7.5				180
Ramofafia David 	FBS	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5			 2 		75
Seimoana Elizabeth 	FBS	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7	7.5		7.5	7.5	7.5				90
Kasukea Weape Meverlyn 	FO	7.5	7.5	7.5	7.5	9.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	2			90
Fiku Siapu Florence 	FBS	7.5	7.5	7.5	7.5		7.5		7.5	7.5	6.5	7.5	6		7.5				142.5
Ino Sylvia 	H K	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5				 15 	180
Futia Maery	Security	7.5	7.5	7.5	7.5	7.5	7.5			7.5	7.5	7.5	7	7.5					165
Walani Sheila	FBS	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5			 2 		135
Parkinson Moses 	POMEC	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5					90
Aigah Jerol	FBS	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5					90
Faifu Kate	FBS	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5					82.5
Mara Joy Hadassah	FBS	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7		7.5	7.5	7.5					82.5
Nisha Joy 	FO	7	7.5	7.5	7	7.5	7.5		7.5	7.5	5	7.5	7.5	7.5			 1 		165
Roko Joyce	H K	6.5	7.5	7.5					7.5	7.5	7.5	7		7.5	7.5				135
Salu Linma	FBP	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5				180
Pavu N Salina 	H K	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5		7.5	7.5					165
Maehorana Renetta 	FBP	9.5		7.5	7	10	7.5	7.5	9		9.5	7	7.5	7.5		8			180
Luis Marion	FBP	7.5	7.5		7.5	7	7.5	7	6.5	7.5		7.5	7.5	7.5					97.5
Noli M Mary	FBP	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5				90
Hou Rose Diana	Finance			7.5	7.5	7			7.5			7	7						90
Hasi Delma	FO	6.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5				90
Toku Odikana 	Security		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5				90
Tiba John 	Security	7.5		7.5	7.5		7	7.5	7.5		7.5	7.5	7.5	7.5	7				82.5
Anilafa Amasia Davy	Admin	7.5	7.5	7.5	7.5	7.5	7.5	7.5	7.5	7.5		7.5		7.5	7.5				180
Mena'a Margaret	FBP	7.5	7.5		6.5	6.5	7.5	7.5		7.5		6.5	7.5	7.5	7				82.5
Masura Hellen	FBP	7.5		7.5		7.5	7.5	7.5		7.5	7.5		7.5	7.5	7.5				75
O'oi Jerlyn	H K	13.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7		7.5	7.5	6			180
Vuthia Ngelea Bounty	FBP	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5		7.5	7.5			 2 		67.5
Honihuitoro Lovelyn	FBP			7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5				82.5
Sorumana Don 	FBS	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7	7.5				90
Hadobola Augustine 	FBS		7.5	7.5	7.5		7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5				82.5
Afia Anisca	FBS	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	6.5				90
Batalididi Joycelyn 	H K	7.5	7.5	7.5	7	7.5		7.5	7	7.5	7.5	7.5	7.5		7.5				90
Moale Jenny	FBP	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5				90
Gordon Doncy	Finance	7	7.5	7.5	7.5	7.5		7.5	7	7.5	7.5	8.5	7.5		7.5	1			180
Sunaone Daledan Chris	Finance	7.5	7.5	7.5	7	7.5	7.5		7.5	7.5	7.5	8.5	7.5	7		1			180
Gasibule Zebrina Joy	FBS	7.5		7.5	7.5	7.5	7.5	7.5	7		7.5	7.5	7.5	7.5	7.5				180
Leni Simon Junior	FBS	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5				90
Basu Ivory	FBS	7.5	7.5		7.5	7.5	7.5	7.5		7.5		7.5	7.5	7.5	7.5		 2 		67.5
Ariki Bareth 	FBS	7	7		7.5	7.5	7	7.5	7.5	7	7	7.5	7.5		6.5				90
Muiri'i Marisha 	FBP		7.5			7.5	7.5	7.5		7.5		7.5	7.5	7.5	7.5				67.5
Kalae Junior	FBS	7.5	7.5	7.5	7.5	7.5	7.5		7.5		7.5	7.5	7.5		7.5				82.5
Saeve Rosina	FBP		7	7		7.5		7.5	7.5	7.5	7.5		7.5	7.5	7				75
Anilafa Oge Adon 	Finance	7.5	7	7.5	10.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		3			90
Makania Esther 	H K	7.5	13.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	6			180
Kiini Barbra 	H K			7.5	7.5	7.5	7.5	7.5		14	14	7.5	7.5	7.5	7.5	13			165
Ruru Rose	FBP			6.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5					75
Kemangava Pretty Lovelyn	FBP	7.5	7.5	7.5		7.5	7.5	7.5	7.5		7.5		7.5	7.5	7.5		 2 		75
Donga Eddie Alisha	FBS		7.5	7.5	7.5	7.5	7.5	7.5	7.5			7.5	7.5		7.5				75
Gu'ufo'oa Jnr Jock	POMEC			7.5	7.5	5.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5				150
Maite Austin	POMEC	7.5	7.5	7.5	7.5	9.5	7.5		7.5	7.5	7.5	7.5	7.5	9.5		4			150
Ieva Helmah	FBS		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5				90
Baniatawa Kramon	FBP	7.5	7.5	7.5		7.5	7.5		7.5	7.5			7.5	7.5	7.5				75
Fiulawa Niute'e Jimmy 	Admin		6	6	6	6.5	7	6.5	7.5	6		7.5		7	7				165
Uiga Sarah 	FBP																		0
Rau Samantha	FBP	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7	7.5		7.5	7.5				165
Fernandez Betotina Marguerita	Admin	6.5	11	6.5		7		7.5		6		7	5.5			3.5			120
Kuper Koi Robert	Finance	7.5																	7.5
Nasihunu Varinah 	FBS		7.5	7.5	7.5	7.5	7.5			7.5	7.5	7.5	7.5	7.5	7.5			 15 	82.5
Kanaoli Jerolyn	FBS						7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5		 2 		45
Lago Hansol	FBP	7	7.5	7	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5				90
Elson Hezishel	FBP	7.5	7	7.5	7.5			7.5	7.5	7.5	7.5	7.5		7.5	7.5		 1 		75
Tepai Ninah	FBP										5.5		7	7	6.5				30
Nego Joddy	FBP	7.5	7.5			7.5	7.5	7.5	7.5	7.5	8.5		7.5	7.5	7.5	1			135
Tekosi Bravelyn	FBS	7.5	7.5	7.5		7.5			7.5	7.5	7		7.5	7.5	7.5				75
Riitefia Justin 	POMEC	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	10		2.5			150
Waiwori Lynette	FBP			7.5	7.5	7.5	7.5	7.5		7	7	7.5	7.5						105
Titiri Simmy	FBP	5.5	7	7.5		7.5	7.5	7.5		7.5	7.5	7.5							67.5
Mesepitu Tarepala Tonia	Finance		7.5	7	7.5	4			7	6.5		7	7	7					135
Deve Haoia Gloria	POMEC	7	7.5	7.5	7	7.5	7.5		6.5	7.5	7.5	7.5	7.5	7.5					150
Siau Tracy	H K	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5					180
Takarii Margret	H K	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5	7	7					180
Roosevelt Genesis	H K		7.5	7.5		7.5	7.5	7.5	7.5	14	7.5		7.5	7.5	7.5	6.5			90
Melapi Junior	FBS																		0
Ekotani Kefa William	Admin	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	8.5	9.5	7.5	3			180
Elega John	FBS		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5				90
Monohoru Senrose	H K	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5					180
Honi Greyleen	FBS	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5				90
Lio Ella	Finance	7	7	7	7.5	7.5	7		7	7.5	7		7	7.5					165
Sara Cecilia	FBP	7	7	7	7		7				7	7							52.5
Hivapule Rodney	POMEC	7		7.5		9	7.5	7.5	7.5		7.5	7.5	7.5	7.5	14	8.5			135
Pio Dava Frank Junior	FBS	8.5	7	7.5			7.5	7		6	6.5		7	7	7	1			150
Rasini Fagana Susan	H K		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5				180
Vaeto Cranolyn	FBP	7.5	7.5		7.5	7.5	7.5	7.5		7.5	7.5	6.5	7.5	7.5	7.5				135
Panda Clinton	POMEC	7.5	7.5	7.5	7.5	9.5	7.5		7.5	7.5	7.5	7.5	7.5	9.5		4			180
Hadosaia Greyleen	FBS	7.5		7.5	7.5		7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5				82.5
Ouou Stacey	FBS	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5					90
Kala Doreen	H K																		0
Papage Barbra	H K	7.5		7.5	7.5	7.5	7.5	7	7.5		7.5	14	7.5	7.5	7.5	6.5			90
Dao Piqu Florence	Admin	1	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7	7.5	7.5					180
Mamata Jordan	H K										7.5	7.5	7.5		7.5				30
Taisia Tahirih Zaynab	Finance	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5					180
Manetoali Alice	FO	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5				90
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
let ccUpdates = [];

const lines = RAW.trim().split('\n');
for (const line of lines) {
  const parts = line.split('\t').map((p) => p.trim());
  const name = parts[0];
  const costCenter = parts[1] || '';
  const dayVals = parts.slice(2, 16);
  const otVal = parts[16] || '';
  const sickVal = parts[17] || '';
  const annualVal = parts[18] || '';
  const convVal = parts[19] || parts.slice(19).join(' ').trim() || '0';
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
  const sick = sickVal !== '' ? String(parseNum(sickVal)) : '';
  const annual = annualVal !== '' ? parseNum(annualVal) : 0;
  const conveyance = parseNum(convVal);

  const existing = sheet[FORTNIGHT][id] || {};
  sheet[FORTNIGHT][id] = {
    ...existing,
    dayValues,
    totalOvertime: ot,
    sickDays: sick !== '' ? sick : (existing.sickDays ?? ''),
    annualLeave: annual,
    conveyanceAll: conveyance,
    phDo: existing.phDo ?? '',
    phPay: existing.phPay ?? 0,
    compassionate: existing.compassionate ?? '',
    metLeave: existing.metLeave ?? 0,
  };

  if (costCenter) {
    const emp = employees.find((e) => String(e.employeeId) === id);
    if (emp && (emp.costCenter || '').trim() !== costCenter) {
      emp.costCenter = costCenter;
      ccUpdates.push(`${name} -> ${costCenter}`);
    }
  }
  updated++;
}

fs.writeFileSync(sheetPath, JSON.stringify(sheet, null, 2), 'utf8');
if (ccUpdates.length) {
  fs.writeFileSync(devicePath, JSON.stringify(employees, null, 2), 'utf8');
}
console.log(`Updated ${updated} employees for Jan 19 - Feb 1.`);
if (ccUpdates.length) console.log('Cost center updated:', ccUpdates.length);
if (notFound.length) console.log('Names not found:', notFound.join(', '));
