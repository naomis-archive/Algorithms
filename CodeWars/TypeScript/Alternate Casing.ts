//invert the casing of each letter in the string.
export function toAlternatingCase(s: string): string {
  return s
    .split("")
    .map((el) => (el.charCodeAt(0) <= 90 ? el.toLowerCase() : el.toUpperCase()))
    .join("");
}
