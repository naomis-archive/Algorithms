//sum the squares of each number in array

function squareSum(numbers) {
  return numbers.length
    ? numbers.map((el) => el ** 2).reduce((a, b) => a + b)
    : 0;
}
