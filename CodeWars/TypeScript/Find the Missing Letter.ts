// find the missing letter from an alphabetical array of letters
export function findMissingLetter(array: string[]): string {
  for (let i = 1; i < array.length; i++) {
    if (array[i].charCodeAt(0) !== array[i - 1].charCodeAt(0) + 1) {
      return String.fromCharCode(array[i].charCodeAt(0) - 1);
    }
  }
  return "no missing letters";
}
