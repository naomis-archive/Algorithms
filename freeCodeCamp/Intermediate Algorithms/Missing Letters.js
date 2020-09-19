//find the missing letter in an alphabetical string
function fearNotLetter(str, i = 1) {
  return i >= str.length
    ? undefined
    : str.charCodeAt(i) !== str.charCodeAt(i - 1) + 1
    ? String.fromCharCode(str.charCodeAt(i) - 1)
    : fearNotLetter(str, i + 1);
}
