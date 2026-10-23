const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

export function formatDate(date: string) {
  const [day, month, year] = date.split("-").map(Number);
  const dateInstance = new Date(year, month - 1, day);

  return `${months[dateInstance.getMonth()]} ${dateInstance.getFullYear()}`;
}
