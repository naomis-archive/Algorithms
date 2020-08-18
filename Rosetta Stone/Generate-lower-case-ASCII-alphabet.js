//generate an array of lower case ASCII characters for a given range
function lascii(cFrom, cTo) {
  let array = [];
  for (let i = cFrom.charCodeAt(0); i <= cTo.charCodeAt(0); i++) {
    array.push(String.fromCharCode(i));
  }
  return array;
}
