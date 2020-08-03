//convert string to number. If not a number, return null
export function parseF(s: string): number {
  return isNaN(Number(s)) ? null : Number(s);
}
