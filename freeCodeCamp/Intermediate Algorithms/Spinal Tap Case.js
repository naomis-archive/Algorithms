//take a string, return string in lowercase with dashes instead of whitespace
function spinalCase(str) {
  return str
    .replace(/([A-Z])|_/g, " $1")
    .trim()
    .split(/\s+/)
    .join("-")
    .toLowerCase();
}
