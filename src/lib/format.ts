const NL_DAYS = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];
const NL_MONTHS = [
  "januari", "februari", "maart", "april", "mei", "juni",
  "juli", "augustus", "september", "oktober", "november", "december",
];

/** "2026-09-16" -> "woensdag 16 september 2026" */
export function formatDateNL(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  return `${NL_DAYS[dt.getUTCDay()]} ${d} ${NL_MONTHS[m - 1]} ${y}`;
}

/** "2026-09-16" -> "16 sep 2026" */
export function formatDateShortNL(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${NL_MONTHS[m - 1].slice(0, 3)} ${y}`;
}

export function formatPrice(price?: string | null, currency = "USD"): string {
  if (price == null) return "Gratis";
  const n = Number(price);
  if (Number.isNaN(n)) return "Gratis";
  if (n === 0) return "Gratis";
  return `${currency} ${n.toFixed(2)}`;
}

export function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m ? `${h}u ${m}min` : `${h} uur`;
}

const EN_DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const EN_MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/** "2026-09-16" -> "Wednesday, September 16, 2026" */
export function formatDateEN(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  return `${EN_DAYS[dt.getUTCDay()]}, ${EN_MONTHS[m - 1]} ${d}, ${y}`;
}

export function formatPriceEN(price?: string | null, currency = "USD"): string {
  if (price == null) return "Free";
  const n = Number(price);
  if (Number.isNaN(n) || n === 0) return "Free";
  return `${currency} ${n.toFixed(2)}`;
}

export function formatDurationEN(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m ? `${h}h ${m}min` : `${h} hour${h > 1 ? "s" : ""}`;
}
