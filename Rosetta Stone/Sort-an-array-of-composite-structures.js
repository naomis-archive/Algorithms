//sort the array according to the 'key' attribute of the objects and return the sorted array.
function sortByKey(arr) {
  arr.sort((a, b) => {
    return a.key - b.key;
  });
  return arr;
}
