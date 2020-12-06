/**
 * Given an array of strings, sort them in order of increasing
 * lengths. If two strings have the same length, their relative
 * order must be the same as in the initial array.
 * @param strings
 */
const sortByLength = (strings: string[]): string[] => {
  return strings.sort((a, b) => a.length - b.length);
};

/**
 * Test Cases
 */
console.log(sortByLength(["abc", "", "aaa", "a", "zz"]), [
  "",
  "a",
  "zz",
  "abc",
  "aaa",
]);
