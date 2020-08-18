//this function finds all numbers less than the argument which are multiples
//of either 3 or 5 and returns the sum of those numbers.
function multiplesOf3and5(number) {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum = sum + i;
    }
  }
  return sum;
}
