//remove all vowels from the string
function disemvowel(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  return str
    .split("")
    .filter((el) => vowels.indexOf(el.toLowerCase()) === -1)
    .join("");
}
