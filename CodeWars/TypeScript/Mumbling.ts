//given a string, return a new string consisting of each letter repeated n times, where n is the position of that letter in the string. Separate each block of letters with a -, Title cased.
export function accum(s: string): string {
  return s
    .split("")
    .map((el, ind) => el.toUpperCase() + el.toLowerCase().repeat(ind))
    .join("-");
}
