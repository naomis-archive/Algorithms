//take array and size, return array as 2D array containing subarrays of size length
function chunkArrayInGroups(arr, size) {
  return arr.slice(0, size).length > 0
    ? [arr.slice(0, size)].concat(
        chunkArrayInGroups(arr.slice(size, arr.length), size)
      )
    : [];
}
