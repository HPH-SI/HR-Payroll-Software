export default function ReportsPage() {
  return (
    <section className="card">
      <h2>Pivot for Accounting</h2>
      <div className="grid two">
        <label>
          Report Period
          <select id="reportPeriodType">
            <option value="fortnight">Fortnight</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="annually">Annually</option>
            <option value="custom">Custom Date Range</option>
          </select>
        </label>
        <label id="reportFortnightLabel">
          Fortnight Period (2026)
          <select id="reportFortnight"></select>
        </label>
        <label id="reportMonthLabel" className="section-hidden">
          Month
          <input type="month" id="reportMonth" defaultValue="2026-02" />
        </label>
        <label id="reportQuarterLabel" className="section-hidden">
          Quarter
          <select id="reportQuarter">
            <option value="2026-Q1">Q1 2026</option>
            <option value="2026-Q2">Q2 2026</option>
            <option value="2026-Q3">Q3 2026</option>
            <option value="2026-Q4">Q4 2026</option>
          </select>
        </label>
        <label id="reportYearLabel" className="section-hidden">
          Year
          <input type="number" id="reportYear" defaultValue="2026" min="2024" max="2030" />
        </label>
        <label id="reportCustomFromLabel" className="section-hidden">
          From
          <input type="date" id="reportDateFrom" />
        </label>
        <label id="reportCustomToLabel" className="section-hidden">
          To
          <input type="date" id="reportDateTo" />
        </label>
      </div>
      <div className="button-row">
        <button id="generateReport" type="button" className="primary">
          Generate Report
        </button>
      </div>
      <div className="report-header" id="reportHeader">
        <span id="reportToLabel">To: </span>
        <span id="reportToDate"></span>
        <h3 id="reportTitle">PIVOT FOR ACCOUNTING</h3>
      </div>
      <div className="table-wrap report-pivot-wrap">
        <table className="report-pivot-table" id="reportPivotTable">
          <thead>
            <tr>
              <th>Cost Center</th>
              <th>Sum of Taxable Earning $ (A)</th>
              <th>Sum of Annual Leave</th>
              <th>Sum of TOTAL Earning $</th>
              <th>Sum of NPF &apos;EE&apos;</th>
              <th>Sum of NPF &apos;ER&apos;</th>
              <th>Sum of PAYE $ (A)</th>
              <th>Sum of PAYE $ (AL)</th>
              <th>Sum of Basic Rate</th>
              <th>Sum of Other Deductions</th>
              <th>Sum of AMOUNT RO SB$</th>
            </tr>
          </thead>
          <tbody id="reportPivotBody"></tbody>
        </table>
      </div>
    </section>
  );
}
