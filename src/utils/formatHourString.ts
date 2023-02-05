export function formatHourString(hour: string): string {
  hour = hour.replace(/\D/g, "");

  return hour.replace(/^(\d{2})(\d{2})/g, "$1:$2");
}
