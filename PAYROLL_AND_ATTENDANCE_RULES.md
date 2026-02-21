# Payroll and Attendance Rules

This document captures all rules, formulas, and specifications for the HR Payroll System's Attendance page and Payroll section.

---

## Attendance Page (Attendance Sheet)

### Table Structure

| Column | Source / Rule |
|--------|---------------|
| Ee # | Employee ID as per information fed |
| Download | Excel and PDF buttons for individual employee export |
| Names | Employee name as per information fed |
| Cost Center | As per information fed |
| Shift | From roster/calendar table or attendance machine |
| Date columns (14 days) | Fortnight period; hours per day (editable) |
| Total | Sum of daily hours worked, capped at 90 per fortnight |
| Normal | Total − OT − PH/DO |
| OT (Time ½) | Manually entered |
| PH/ DO | Manually entered |
| PH Pay | Manually entered |
| Sick Day | Manually entered |
| Compassionate | Manually entered |
| MET Leave | Manually entered |
| Annual Leave | Manually entered |
| HHS | Normal × 0.5 |
| Conveyance All. | See Conveyance rules below |

### Time Rules

- **Max hours per day:** 7.5
- **Max total per fortnight:** 90
- **Daily cells:** Editable for missing data (manual entry)
- **Time In:** From attendance machine
- **Time Out:** From shift end time; if employee clocks out early, use actual time

### HHS Calculation

```
HHS = Normal × 0.5
```

### Conveyance Calculation

- **Dawn, Morning, Afternoon shifts:** Normal hours × Basic wage × 15%
- **GS 1 & GS 2 shifts:** Normal hours × Basic wage × 30%
- Normal hours = Total work − OT − PH/DO (capped per fortnight)
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
| PH x 2 | Manually fed |
| Arrears | Manually fed |
| Compass / Officiate | Manually fed |
| MET Leave | Manually fed |
| Annual Leave | Manually fed |
| Voluntary NPF | Manually fed |
| Other deductions | Manually fed |

### Calculated Fields (Formulas)

| Field | Formula |
|-------|---------|
| Basic Salary | Basic wage × Normal (from attendance) |
| OT Salary | Basic wage per hour × 1.5 × OT hours |
| Housing Allowance | Housing allowance per hour × (Normal + OT + PH/DO) |
| Taxable Earning (A) | Basic + OT Salary + PH x 2 + Housing allowance + Arrears + Compass/Officiate + MET Leave + HHS + Conveyance Allowance |
| Total Earning | Taxable Earning (A) + Annual Leave |
| NPF 5% | 5% of Total Earning |
| NPF 7.5% | 7.5% of Total Earning |
| Basic 1% | 1% of Basic Salary |
| Pay E (A) | As per formula (PAYE brackets) |
| Salary for the Period | Total Earning − NPF 5% − Voluntary NPF − Pay E(A) − Basic 1% − Other Deductions |
| Salary for the Period RO | Round off of Salary for the Period |

### Payroll Column Order

1. Employee Id  
2. Download  
3. Employee Name  
4. Cost Center  
5. NPF Number  
6. BSP Account  
7. Basic Wage/hr  
8. Housing all/hr  
9. Basic Salary  
10. OT Salary  
11. PH x 2  
12. Housing Allowance  
13. Taxable Earning (A)  
14. Arrears  
15. Compass/Officiate  
16. MET Leave  
17. Annual Leave  
18. Total Earning  
19. NPF 5%  
20. NPF 7.5%  
21. Voluntary NPF  
22. Pay E (A)  
23. Basic 1%  
24. Other Dedu  
25. Salary for Period  
26. Salary for Period RO  

### PDF and Excel Export

- Individual employee PDF and Excel downloads use the **same row format** as the Payroll table.
- Column order in exports matches the table above.

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

---

*Last updated: February 2026*
