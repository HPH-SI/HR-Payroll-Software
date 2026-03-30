# Payroll and Attendance Rules

This document captures all rules, formulas, and specifications for the HR Payroll System's Attendance page and Payroll section.

---

## Attendance Page (Attendance Sheet)

### Table Structure

| Column | Source / Rule |
|--------|---------------|
| Ee # | Employee ID as per information fed |
| Names | Employee name as per information fed |
| Cost Center | As per information fed |
| Date columns (14 days) | Fortnight period; hours per day (editable) |
| Total | Sum of daily hours worked (no cap) |
| Normal | Total − OT − PH/DO |
| OT (Time ½) | Manually entered |
| PH/ DO | Manually entered |
| PH Pay | Optional field (not used to override payroll; PH x 2 is always Basic wage × PH/DO × 2) |
| Sick Day | Manually entered |
| MET Leave | Manually entered |
| Annual Leave | Units (typically days); payroll amount = 7.5 × (Basic wage/hr + Housing all/hr) × this value |
| HHS | Normal × 0.5 |
| Conveyance All. | See Conveyance rules below |

### Time Rules

- **Max hours per day:** 24 (no effective cap)
- **Max total per fortnight:** 999 (no effective cap)
- **Total hours:** Sum of hours worked throughout the fortnight. If OT hours are increased manually, total hours will increase accordingly (Total hours = Normal hours + OT hours).
- **Daily cells:** Editable for missing data (manual entry)
- **Time In:** From attendance machine
- **Time Out:** From shift end time; if employee clocks out early, use actual time

### HHS Calculation

- **Eligible cost centers only:** H K, HK, POMEC. All other cost centers receive 0.
- **Formula (when eligible):** HHS = max(0, (Normal × 0.5) − (Sick days × 7.5))
```
HHS = (costCenter in H K | HK | POMEC) ? max(0, Normal × 0.5 − SickDays × 7.5) : 0
```

- **Sick days:** Uses the Sick Day value from the attendance row. Each sick day reduces formula HHS by **7.5**.
- **Log-based payroll preview** (`buildPayrollMetrics`): Uses total hours as the base instead of Normal: `max(0, TotalHours × 0.5 − SickDays × 7.5)` when eligible (`sickDays` may be passed via overrides; otherwise 0).

### Conveyance Calculation

- **Dawn, Morning, Afternoon shifts:** Normal hours × Basic wage × 15%
- **GS 1 & GS 2 shifts:** Normal hours × Basic wage × 30%
- Normal hours = Total work − OT − PH/DO
- **Manual override:** The Attendance page allows users to manually edit the Conveyance Allowance field for any employee.

### Color Coding

- **Pink:** Sunday only
- **Yellow:** Special days (if applicable)

---

## Payroll Section

### Data Link

- Payroll uses data from the **Attendance sheet** when both are loaded for the **same fortnight**.
- Load the Attendance sheet first, then Load Logs on the Payroll page for the same period.
- If the Attendance sheet is not loaded for that fortnight, Payroll falls back to logs-based calculations.

### Manual / Input Fields

| Field | Source |
|-------|--------|
| Basic Wage per hour | As per information fed |
| Housing allowance per hour | As per information fed |
| Arrears | Manually fed |
| MET Leave | Manually fed |
| Annual Leave | Manually fed |
| Voluntary NPF | Percentage of **total earning** (e.g. enter `5` for 5%). Amount deducted = total earning × (percentage ÷ 100). |
| Other deductions | Manually fed |

### Calculated Fields (Formulas)

| Field | Formula |
|-------|---------|
| Basic Salary | Basic wage × Normal (from attendance) |
| OT Salary | Basic wage per hour × 1.5 × OT hours |
| PH x 2 | Basic wage × PH/DO hours × 2 (from attendance) |
| Housing Allowance | Housing allowance per hour × (Normal + OT + PH/DO) |
| Taxable Earning (A) | Basic + OT Salary + PH x 2 + Housing allowance + Rent allowance + Arrears + Compass/Officiate (from employee record) + MET Leave + HHS + Conveyance Allowance |
| Total Earning | Taxable Earning (A) + Annual Leave pay (7.5 × (Basic wage/hr + Housing all/hr) × attendance Annual Leave units) |
| Voluntary NPF (amount) | Total Earning × (Voluntary NPF % ÷ 100) — e.g. 5% → 0.05 × Total Earning |
| NPF 5% | 5% of Total Earning |
| NPF 7.5% | 7.5% of Total Earning (reporting; not deducted from Salary for the Period) |
| Basic 1% | 1% of Basic Salary |
| Pay E (A) | As per formula (PAYE brackets) |
| Salary for the Period | Total Earning − NPF 5% − Voluntary NPF **amount** − Pay E(A) − Basic 1% − Other Deductions |
| Salary for the Period RO | Round off of Salary for the Period |

### Payroll Column Order

1. Employee Id  
2. Employee Name  
3. Cost Center  
4. NPF Number  
5. BSP Account  
6. Basic Wage/hr  
7. Housing all/hr  
8. Basic Salary  
9. OT Salary  
10. PH x 2  
11. Housing Allowance  
12. Rent Allowance  
13. Taxable Earning (A)  
14. Arrears  
15. MET Leave  
16. Annual Leave  
17. Total Earning  
18. NPF 5%  
19. NPF 7.5%  
20. Voluntary NPF  
21. Pay E (A)  
22. Basic 1%  
23. Other Dedu  
24. Salary for Period  
25. Salary for Period RO  

### PDF and Excel Export

- **Download All Payslips PDF:** Generates a multi-page PDF with one payslip per employee (filtered by current filters). Uses the redesigned payslip format with centered logo, header text, and PAY SLIP title.
- **Download All Excel:** Exports payroll data as CSV.
- Payslip PDF format: Logo and hotel info centered; employee details (name, ID, commencement date, cost center, NPF, BSP); Earnings table; Deductions table; Summary (Total Earnings, Total Deductions, Salary for the Period, Salary for the Period RO).

---

## PAYE (Pay E) Formula

```
Annualized = Total Earning × 26

If Total Earning < 1156.92:     Pay E (A) = 0
If Total Earning < 1733.86:     Pay E (A) = (Annualized − 30080) × 0.11 / 26
If Total Earning < 2310.78:     Pay E (A) = (Annualized − 30080 − 15000) × 0.23 / 26 + 63.46
If Total Earning < 3464.63:     Pay E (A) = (Annualized − 30080 − 30000) × 0.35 / 26 + 63.46 + 132.69
Else:                           Pay E (A) = (Annualized − 30080 − 60000) × 0.4 / 26 + 63.46 + 132.69 + 403.85
```

---

## Sync and Load Flow

1. **Sync Employees & Attendance** (Attendance page): Syncs from biometric device, then loads attendance sheet.
2. **Load Attendance** (Attendance page): Loads employees and attendance for the selected fortnight.
3. **Load Logs** (Payroll page): Loads payroll for the selected fortnight. Uses Attendance sheet data when the fortnight matches.

### Device attendance sync (server)

- **Attendance logs** (`attendance-data.json`): On **Sync Attendance** (Biometric page), logs from the device are **merged** with what is already stored. Rows with a date **before** the **current fortnight** (same Jan 5 fortnight calendar as the app) are **kept**. Rows from the **current fortnight start date onward** are replaced by the device export for those dates.
- **Attendance table** (`attendance-table.json`): Same merge rule by row `date` when the table is synced from the bridge.
- **Manual attendance sheet** (`attendance-sheet-manual.json`): Still saved **per fortnight**; saving one fortnight does not remove other fortnights.

---

*Last updated: February 2026*
