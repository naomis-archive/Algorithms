//find the first 10 digits of the sum of an array of large numbers.

function largeSum(arr) {
  let sum = 0;
  arr.map(el => (sum = sum + parseInt(el)));
  console.log(sum);
  let result = sum
    .toString()
    .substring(0, 11)
    .replace(".", "");
  console.log(result);
  return parseInt(result);
}
