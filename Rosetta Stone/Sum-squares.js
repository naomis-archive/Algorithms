//find the sum of the squares of numbers in an arraysfunction sumsq(array) {
function sumsq(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + Math.pow(array[i], 2);
  }
  return sum;
}
