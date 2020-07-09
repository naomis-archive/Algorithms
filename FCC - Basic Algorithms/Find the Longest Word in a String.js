//take a string, return the length of the longest word
function findLongestWordLength(str) {
  return str
    .split(" ")
    .map((el) => el.length)
    .sort((a, b) => b - a)[0];
}
