//return an array containing the elements found in one of a pair of arrays but not the other.
function diffArray(arr1, arr2) {
  return arr1
    .filter((el) => arr2.indexOf(el) === -1)
    .concat(arr2.filter((el) => arr1.indexOf(el) === -1));
}
