//this function returns the largest prime factor of the number argument.
function largestPrimeFactor(number) {
  let factor = 2;
  let result = 1;
  while (factor <= number) {
    if (number % factor == 0) {
      result = factor;
      number = number / factor;
    } else {
      factor++;
    }
  }
  return result;
}
