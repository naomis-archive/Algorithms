//take an array of sub-arrays, merge them, remove all repeated elements.
function uniteUnique(arr) {
  return [...arguments]
    .flat()
    .filter((el, i) => [...arguments].flat().indexOf(el) === i);
}
