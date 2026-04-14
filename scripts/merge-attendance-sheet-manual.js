#!/usr/bin/env node
/**
 * Merge a manual attendance JSON (e.g. copied from Windows:
 *   server/attendance-sheet-manual.json
 * ) into this machine's server/attendance-sheet-manual.json.
 *
 * Usage:
 *   node scripts/merge-attendance-sheet-manual.js "/path/to/attendance-sheet-manual.json"
 *
 * Per fortnight and per employee, fields from the incoming file win where defined;
 * existing values are kept for keys not present on incoming.
 */

const fs = require("fs");
const path = require("path");

const TARGET = path.join(__dirname, "..", "server", "attendance-sheet-manual.json");
const incomingPath = process.argv[2];

if (!incomingPath) {
  console.error("Usage: node scripts/merge-attendance-sheet-manual.js <path-to-json-from-other-pc>");
  process.exit(1);
}

const readJson = (p) => JSON.parse(fs.readFileSync(p, "utf-8"));

const base = fs.existsSync(TARGET) ? readJson(TARGET) : {};
const extra = readJson(path.resolve(incomingPath));

const mergeEmp = (a, b) => ({ ...(a && typeof a === "object" ? a : {}), ...(b && typeof b === "object" ? b : {}) });

const out = { ...base };
for (const [fv, emps] of Object.entries(extra)) {
  if (!emps || typeof emps !== "object") continue;
  const prev = out[fv] && typeof out[fv] === "object" ? out[fv] : {};
  const merged = { ...prev };
  for (const [eid, row] of Object.entries(emps)) {
    merged[eid] = mergeEmp(prev[eid], row);
  }
  out[fv] = merged;
}

fs.writeFileSync(TARGET, JSON.stringify(out, null, 2));
console.log("Merged into", TARGET);
console.log("Fortnights:", Object.keys(out).length);
