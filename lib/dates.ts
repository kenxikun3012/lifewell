/** YYYY-MM-DD for a Date, in local time. */
export function toDateString(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function todayDateString(): string {
  return toDateString(new Date());
}

/** Monday of the week containing `date` (local time), as YYYY-MM-DD. */
export function mondayOfWeek(date: Date): string {
  const d = new Date(date);
  const day = d.getDay(); // 0 = Sunday
  const diffToMonday = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + diffToMonday);
  return toDateString(d);
}

export function addWeeks(weekStartStr: string, weeks: number): string {
  return addDays(weekStartStr, weeks * 7);
}

export function addDays(dateStr: string, days: number): string {
  const d = new Date(`${dateStr}T00:00:00`);
  d.setDate(d.getDate() + days);
  return toDateString(d);
}

const WEEKDAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;

/** 7 {date, label, dayNumber} entries for the week starting `weekStartStr` (Monday). */
export function weekDaysFrom(weekStartStr: string) {
  return WEEKDAY_LABELS.map((label, i) => {
    const dateStr = addDays(weekStartStr, i);
    const dayNumber = Number(dateStr.slice(8, 10));
    return { date: dateStr, label, dayNumber };
  });
}
