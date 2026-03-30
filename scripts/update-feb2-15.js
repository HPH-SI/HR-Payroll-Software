#!/usr/bin/env node
/**
 * Updates attendance for Feb 2 - 15 fortnight.
 * Format: Name \t CostCenter \t day0..day13 \t OT \t PH/DO \t Sick \t Annual \t Conveyance
 */

const fs = require('fs');
const path = require('path');

const FORTNIGHT = '2026-02-02_2026-02-15';

const RAW = `TANEKO Sandra	H K	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5	7.5	6.5		6.5			195
MILTON Ellen	H K	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7					90
ARUOMEA Christina	Finance	7.5	6.5	6.5	7	7.5	7		7.5	7.5	7	7	7	7				2		150
SUIMAEA, Rachel S. 	FBP	7.5	7.5	7.5	7.5	7.5			7.5	7.5	7.5	7.5	7.5	7.5						165
RUKUIWAQA Moffat	Security	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5			2		75
FANASIA, Gretal 	H K	6.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7						82.5
RUKASI, Florence	Security	7	7.5	7.5	7.5		7.5	7	7.5	4	7.5	7.5	7.5	7.5				2		75
SIUNARII, Alison	H K	7.5	7	7.5	7.5	7.5		7.5	7.5	7		7.5	7.5		7.5					165
OGE, Marvin	FBP	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5						90
PENIOP Clement	Security		7.5	7.5	7.5	7.5	7.5			7.5	7.5	7.5	7.5	7.5						75
NAPS Patteson	POMEC	7.5	7.5	7.5	7.5	7.5	7.5		8	7.5	7.5	7.5	7.5	7.5		0.5				180
TOVAGETO Derrick	FBP																			0
TALUASI Elizabeth	H K	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	10	2.5				180
LEGUMANA Titus	FBP		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5					90
BUNIA Cleophas	H K	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5						90
BELIGA Jenny	H K		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5					180
JULIAN Salote	H K	7.5	7.5	7.5		7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5					180
MANU Rose	H K	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5					180
RIKO Annette	H K	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5					180
BELO Alick	H K	7.5	7.5	7	7.5	7.5	7.5		7.5	7	7.5	7.5	7.5	7.5						180
NE'E Glenda	FBP	7.5	6.5	6.5	7.5		6	7.5	7.5			7.5	7.5	7.5	7.5					75
ADI Joana	FBP	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5						90
HAMBALU Lorina	H K	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5						90
KWANAFIA Lovelyn	FBP	7	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5					90
TATAU Enest	H K	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5	7.5	7.5		7.5					180
LONGANIMALA Ben	FBP	7.5	7.5	7.5		7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5				3		60
Kuper Yvonne	FBS		7.5	7.5	7.5	7.5	7.5	7.5	7.5	7.5	7.5	7.5	7.5		7.5					60
ANISI Celesty	FBP	7.5	7	7.5		7.5	7.5	7.5	7.5	7.5	7		7.5	7	7.5					90
PITUMANA Madlyn	H K	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	10	7.5	10	5				180
WAKI Frank 	Finance	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5						180
GAROSEPI FAY Veronica	H K	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5						180
SIATA ALICK EDDIMOND 	POMEC		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7	7.5	7.5	7.5					82.5
LUI Philip 	FO	7.5	7.5	7.5	7.5			7.5	7.5	7.5	7.5	7.5		7.5	7.5					165
TALAI Martin 	Security	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5					82.5
IDU Pricilla	H K	7.5	7.5	7.5	7.5	7.5	6.5		7.5	7.5	7.5	7.5	7.5	7.5						165
Sina Selina	Security	7.5		7.5	7.5	7.5	7	7.5	7.5		7.5	7.5	7.5	7.5	7.5			2		75
Halumae Muriel	FBS								7.5	7.5	7.5	7.5	7.5	7.5						90
Kwanga Esther	FBP	7.5	7.5	7		7.5	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5				15	90
Alatala Grace Evalyn	FBS	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5							82.5
Kala Jessy 	H K											7.5	7.5	7.5	7					60
Hikinao Dalcy 	FO				7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5			3		52.5
Baulo John	POMEC	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5					90
Spillius Balinda	Finance	7.5	7.5	7.5	7.5	7.5	6.5		7.5	7.5	7.5	7.5	7.5	7				1		165
Ngivalasi Neverlyn 	FBP	7.5	7	7.5	7.5	7.5	7.5			7.5	7.5	7	7.5	7.5	7.5				15	180
Junior Elifau Eddie 	Admin	6.5	8	6	7.5	6.5		7.5	6	6	14		8.5	10.5	7	11				180
Ramofafia David 	FBS	7.5	7.5	7.5	7.5	7.5	7.5		7.5		7.5	7.5	7.5	7.5	7.5						82.5
Seimoana Elizabeth 	FBS	7.5	7.5	7.5		7.5	6.5	7.5	7.5	7.5	7		7.5	7.5	7.5					90
Kasukea Weape Meverlyn 	FO	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		10.5	3				180
Fiku Siapu Florence 	FBS	6.5	7.5	7.5	7.5	7.5		7	7.5	7.5	7.5	7.5	7.5		9.5	2				82.5
Ino Sylvia 	H K	7.5	7.5	7.5	7.5	7.5	7.5													90
Futia Maery	Security	7.5	6	5		7.5	7.5		7.5	7.5	7.5	7	7.5	7				2		135
Walani Sheila	FBS	7	7		7.5	7	7.5	7	7.5	7		7.5	7		7					165
Parkinson Moses 	POMEC	7	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5						90
Aigah Jerol	FBS	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5						90
Faifu Kate	FBS	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5					90
Mara Joy Hadassah	FBS	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5					180
Nisha Joy 	FO	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5						180
Roko Joyce	H K	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5					180
Salu Linma	FBP	7	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5		7.5	7.5	7.5					75
Pavu N Salina 	H K	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5						180
Maehorana Renetta 	FBP	7		7.5	3.5	7.5	7.5	7.5	7.5		7.5	7.5	10	7.5		2.5				165
Luis Marion	FBP	7.5	7.5	7.5		7.5		7.5	7.5				7.5	7.5	7.5					67.5
Noli M Mary	FBP	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5			2		82.5
Hou Rose Diana	Finance	7	7.5		7	7.5			7.5	6.5	7.5	7.5	6.5							135
Hasi Delma	FO	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5				15	90
Toku Odikana 	Security		7.5	7.5	7.5	7.5	7.5	7		7.5	7.5	7.5	7.5	7.5	7.5					90
Tiba John 	Security	7.5		7.5	7.5	7.5	7.5		7		7.5	7.5	7.5	7						75
Anilafa Amasia Davy	Admin	7.5		7	7.5	7.5	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5					180
Mena'a Margaret	FBP	7.5	7.5		7.5	7.5	10.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	3				90
Masura Hellen	FBP		7.5	7.5		7.5		7.5	7.5		7.5		7.5							52.5
O'oi Jerlyn	H K	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5					180
Vuthia Ngelea Bounty	FBP	7.5	7.5	6.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5						90
Honihuitoro Lovelyn	FBP		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5		7.5					82.5
Sorumana Don 	FBS	7	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5			7.5	7.5					82.5
Hadobola Augustine 	FBS		7.5	7.5		7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5					82.5
Afia Anisca	FBS	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5		7.5	7.5						82.5
Batalididi Joycelyn 	H K	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5					180
Moale Jenny	FBP	7.5	7.5			7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5					82.5
Gordon Doncy	Finance	7.5	7.5	7.5	7.5	7.5		7.5	7	7.5	7.5	7.5	7.5		7.5					180
Sunaone Daledan Chris	Finance	7.5	7	7.5		7.5	7		7.5	7.5	7.5	7.5	7.5	7				3		120
Gasibule Zebrina Joy	FBS		7.5	7.5	7.5	7.5	7.5	7				7.5	7.5	7.5						135
Leni Simon Junior	FBS	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5			3		67.5
Basu Ivory	FBS	7.5	7.5		7.5	7	7.5	7.5	7.5	7.5		7		7.5	7.5					82.5
Ariki Bareth 	FBS	7	7.5	7	7	7		7.5	7.5	7.5	7.5	7.5	7.5		7					67.5
Muiri'i Marisha 	FBP			7.5	7.5	7.5	7.5	7.5		7	7.5	7		7.5	7.5					135
Kalae Junior	FBS	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5		7.5	7.5					90
Saeve Rosina	FBP	6.5	7	7	7.5		7	7.5	7	7.5	7.5	7.5		7	7					82.5
Anilafa Oge Adon 	Finance	7.5			7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5						75
Makania Esther 	H K		7	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5					180
Kiini Barbra 	H K		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5					90
Ruru Rose	FBP	7.5		7.5	7.5	7.5	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5					90
Kemangava Pretty Lovelyn	FBP	6.5		7	6.5	7	7.5	7.5	7		7		7.5	7						75
Donga Eddie Alisha	FBS		7.5	7.5	7.5	7.5		7.5		7.5	7.5	7.5	7.5	7.5						75
Gu'ufo'oa Jnr Jock	POMEC	9.5	7.5	7.5	7.5	7.5		7.5	7.5	5.5	7.5	7.5	7.5		7.5	2.5				180
Maite Austin	POMEC		7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5							150
Ieva Helmah	FBS	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7		7.5	7.5	7.5	7.5					90
Baniatawa Kramon	FBP	7.5		7.5	7.5		7.5	7.5	7.5		7.5	7.5	7.5	6.5	7			3		60
Fiulawa Niute'e Jimmy 	Admin	6	7	6.5	7.5		6.5	6.5	11.5	6.5	13		7	7.5	7.5	9.5				180
Uiga Sarah 	FBP																			0
Rau Samantha	FBP	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5					75
Fernandez Betotina Marguerita	Admin																			0
Kuper Koi Robert	Finance								7.5	7.5		7.5	7.5	7.5	7.5					90
Nasihunu Varinah 	FBS		7.5	7.5	7.5	7.5	7.5	7.5												45
Kanaoli Jerolyn	FBS	7.5	7.5	7.5	7.5		7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5					82.5
Lago Hansol	FBP	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5			2		52.5
Elson Hezishel	FBP	7		7.5	7.5	7.5	7	7.5											15	45
Tepai Ninah	FBP	7.5	7.5	7.5	7.5		7.5	7.5	7.5					7.5	7.5			3		105
Nego Joddy	FBP	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5			7.5	7.5	7.5					165
Tekosi Bravelyn	FBS	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5			2		75
Riitefia Justin 	POMEC	7.5	7.5	7.5	7.5	7.5	7.5		7.5	10.5	7.5	7.5	7.5	7.5		3				180
Waiwori Lynette	FBP			7.5	7	7.5		7.5		7	7.5	7.5	7.5	7	7.5					120
Titiri Simmy	FBP	7.5	7.5	4.5		7.5	7.5			7.5	7.5		7.5	7.5						75
Mesepitu Tarepala Tonia	Finance	7	7		7.5	7.5	7		7	7.5	7.5	7.5	7.5					2		135
Deve Haoia Gloria	POMEC	7.5	7.5	7.5	7.5	7.5	7		7.5	7		7.5	7.5	7.5						165
Siau Tracy	H K	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5						90
Takarii Margret	H K	7	7	7.5	7.5		7.5		7.5	7.5	7.5	7.5	7.5	7.5						82.5
Roosevelt Genesis	H K	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7					90
Melapi Junior	FBS																			0
Ekotani Kefa William	Admin	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5					180
Elega John	FBS		7.5	7.5	7.5	7.5		7.5			7.5	7.5	7.5	7.5						67.5
Monohoru Senrose	H K	7.5	7.5	7.5	7.5	7.5	7.5			7.5	7.5	7.5	7.5	7.5				3		120
Honi Greyleen	FBS		7.5	7.5		7.5	7.5			7	7.5		7.5							52.5
Lio Ella	Finance	7.5	7.5	7.5	7.5	7.5	7		7.5	7.5	7.5	7.5	7.5	7.5						180
Sara Cecilia	FBP																			0
Hivapule Rodney	POMEC	7.5		7.5	7	7.5	7.5	7	7.5		7.5	7.5	7.5	7.5	7.5					135
Pio Dava Frank Junior	FBS	6.5	7	6.5		7.5	7	7	7	7.5	7.5		10	8.5	8.5	4.5				180
Rasini Fagana Susan	H K		7.5	7.5	7.5	7.5	7.5	7		7.5	7.5	7.5	7.5	7.5	7.5					180
Vaeto Cranolyn	FBP		7.5	7.5		7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7					127.5
Panda Clinton	POMEC	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5						180
Hadosaia Greyleen	FBS	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5					90
Ouou Stacey	FBS	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5						90
Kala Doreen	H K																			0
Papage Barbra	H K	7.5		7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5					90
Dao Piqu Florence	Admin	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	8.5		1				180
Mamata Jordan	H K	6.5		7	7		7.5	7.5	7.5		7.5	7	7.5	7.5	7					82.5
Taisia Tahirih Zaynab	Finance	7.5	7.5	7.5	7.5	7.5	7.5		7.5	7.5	7.5	7.5	7.5	7.5						180
Manetoali Alice	FO	7.5	7.5		7.5	7.5	7.5	7.5		7.5	7.5		7.5	7.5	7.5					82.5
Tulumae Wesley	FO									7.5	7.5	7.5	7.5		7.5					75
Paulsen Alexander	FO										7.5	7.5	7.5	6						30
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
  const phDoVal = parts[17] || '';
  const sickVal = parts[18] || '';
  const annualVal = parts[19] || '';
  const convVal = parts[20] || parts.slice(20).join(' ').trim() || '0';
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
  const conveyance = parseNum(convVal);

  const existing = sheet[FORTNIGHT][id] || {};
  sheet[FORTNIGHT][id] = {
    ...existing,
    dayValues,
    totalOvertime: ot,
    phDo: phDo !== '' ? phDo : (existing.phDo ?? ''),
    phPay: existing.phPay ?? 0,
    sickDays: sick !== '' ? sick : (existing.sickDays ?? ''),
    annualLeave: annual,
    conveyanceAll: conveyance,
    compassionate: existing.compassionate ?? '',
    metLeave: existing.metLeave ?? 0,
  };

  if (costCenter) {
    const emp = employees.find((e) => String(e.employeeId) === id);
    if (emp && (emp.costCenter || '').trim() !== costCenter) {
      emp.costCenter = costCenter;
      ccUpdates.push(name + ' -> ' + costCenter);
    }
  }
  updated++;
}

fs.writeFileSync(sheetPath, JSON.stringify(sheet, null, 2), 'utf8');
if (ccUpdates.length) {
  fs.writeFileSync(devicePath, JSON.stringify(employees, null, 2), 'utf8');
}
console.log('Updated ' + updated + ' employees for Feb 2 - 15.');
if (ccUpdates.length) console.log('Cost center updated:', ccUpdates.length);
if (notFound.length) console.log('Names not found:', notFound.join(', '));
