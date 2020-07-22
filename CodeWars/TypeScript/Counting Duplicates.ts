//count the number of letters in the string that occur more than once.
export function duplicateCount(text: string): number {
  const filtered = text
    .toLowerCase()
    .split("")
    .filter((el, i) => i !== text.toLowerCase().split("").indexOf(el));
  return filtered.filter((el, i) => i === filtered.indexOf(el)).length;
}
