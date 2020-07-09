//take array containing sub-arrays of numbers, return single array of largest number in each sub array
function largestOfFour(arr) {
  return arr.map((el) => el.sort((a, b) => b - a)[0]);
}
