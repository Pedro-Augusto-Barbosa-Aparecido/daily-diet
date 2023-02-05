export function formatDateString(date: string): string {
  date = date.replace(/\D/g, "");

  return date.replace(/^(\d{2})(\d{2})(\d{4})/g, "$1/$2/$3");
}
