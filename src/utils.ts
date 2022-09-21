export const monthNames = [
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
];

export const dayNames = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturday",
  "Sunday",
];

export function getOrdinal(n: number) {
  let s = ["th", "st", "nd", "rd"],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]).toString();
}

export function getMonthDigit(month: number) {
  return month + 1 < 10 ? `0${month + 1}` : `${month + 1}`;
}
