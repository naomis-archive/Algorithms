//take an array of sub-arrays, merge them, remove all repeated elements.
function uniteUnique(arr) {
  return [...new Set([...arguments].flat())];
}
