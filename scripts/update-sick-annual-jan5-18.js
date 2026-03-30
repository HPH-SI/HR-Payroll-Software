#!/usr/bin/env node
/**
 * Updates sickDays and annualLeave for Jan 5-18 fortnight.
 * Format: Name \t SickDays \t AnnualLeave (blank = 0 or unchanged)
 */

const fs = require('fs');
const path = require('path');

const FORTNIGHT = '2026-01-05_2026-01-18';

const DATA = `SUIMAEA, Rachel S. 	 2 	
RUKASI, Florence	 2 	
TOVAGETO Derrick		 15 
JULIAN Salote	 3 	
Halumae Muriel		 15 
Kala Jessy 		 15 
Hikinao Dalcy 		 15 
Ngivalasi Neverlyn 	 1 	
Junior Elifau Eddie 	 2 	
Seimoana Elizabeth 	 1 	
Batalididi Joycelyn 	 1 	
Kuper Koi Robert		 15 
Tepai Ninah		 15 
Riitefia Justin 	 3 	
Waiwori Lynette		
Titiri Simmy	 2 	
Elega John	 2 	
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
  const sickVal = parts[1] || '';
  const annualVal = parts[2] || '';
  if (!name) continue;

  const n = normalizeName(name);
  const id = nameToId.get(n) || nameToId.get(n.toLowerCase());
  if (!id) {
    notFound.push(name);
    continue;
  }

  const sickDays = sickVal !== '' ? String(parseFloat(sickVal) || 0) : '';
  const annualLeave = annualVal !== '' ? (parseFloat(annualVal) || 0) : null;

  const existing = sheet[FORTNIGHT][id] || { dayValues: Array(14).fill('') };
  const next = { ...existing };
  if (sickDays !== '') next.sickDays = sickDays;
  if (annualLeave != null) next.annualLeave = annualLeave;
  sheet[FORTNIGHT][id] = next;
  updated++;
}

fs.writeFileSync(sheetPath, JSON.stringify(sheet, null, 2), 'utf8');
console.log(`Updated sick/annual for ${updated} employees (Jan 5-18).`);
if (notFound.length) {
  console.log('Names not found:', notFound.join(', '));
}
