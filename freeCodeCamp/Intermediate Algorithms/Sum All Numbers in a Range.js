//get the sum of the numbers in the range arr, inclusive
function sumAll(arr) {
  return Math.max(...arr) !== Math.min(...arr)
    ? Math.min(...arr) + sumAll([Math.min(...arr) + 1, Math.max(...arr)])
    : arr[0];
}
