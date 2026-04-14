/** Jan 5 anchor for the 26-fortnight schedule that contains today. */
export const getFortnightAnchorStart = () => {
  const today = new Date();
  today.setHours(12, 0, 0, 0);
  let y = today.getFullYear();
  let start = new Date(y, 0, 5);
  if (today < start) y -= 1;
  start = new Date(y, 0, 5);
  const endOfSchedule = new Date(start);
  endOfSchedule.setDate(start.getDate() + 26 * 14 - 1);
  if (today > endOfSchedule) {
    y += 1;
    start = new Date(y, 0, 5);
  }
  return start;
};

export const toLocalIsoDate = (d) => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
};

const formatLabel = (date) =>
  date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });

/** Returns array of 26 fortnight periods for the current year. */
export const getFortnightPeriods = () => {
  const periods = [];
  const start = getFortnightAnchorStart();
  const today = new Date();
  today.setHours(12, 0, 0, 0);
  for (let i = 0; i < 26; i += 1) {
    const periodStart = new Date(start);
    periodStart.setDate(start.getDate() + i * 14);
    periodStart.setHours(12, 0, 0, 0);
    const periodEnd = new Date(periodStart);
    periodEnd.setDate(periodStart.getDate() + 13);
    periodEnd.setHours(12, 0, 0, 0);
    const startIso = toLocalIsoDate(periodStart);
    const endIso = toLocalIsoDate(periodEnd);
    periods.push({
      value: `${startIso}_${endIso}`,
      startIso,
      endIso,
      label: `${formatLabel(periodStart)} – ${formatLabel(periodEnd)}`,
      isCurrent: today >= periodStart && today <= periodEnd,
    });
  }
  return periods;
};

/** Get the current (active) fortnight period. */
export const getCurrentFortnight = () => {
  const periods = getFortnightPeriods();
  return periods.find((p) => p.isCurrent) || periods[0];
};

/** Parse "YYYY-MM-DD_YYYY-MM-DD" value back to { startIso, endIso }. */
export const parseFortnightValue = (value) => {
  const parts = (value || '').split('_');
  return { startIso: parts[0] || '', endIso: parts[1] || '' };
};
