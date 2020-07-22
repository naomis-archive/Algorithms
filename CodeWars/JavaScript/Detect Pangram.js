//check if string is pangram

function isPangram(string) {
  return "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .every((el) => string.toLowerCase().includes(el));
}
