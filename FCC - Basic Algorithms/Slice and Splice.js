//insert the values of arr1 into arr2 at index n, without modifying original arrays.
function frankenSplice(arr1, arr2, n) {
  return [...arr2.splice(0, n), ...arr1, ...arr2];
}
