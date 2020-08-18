//find the sum of the digits of 2^exponent
function powerDigitSum(exponent) {
  let power = BigInt(Math.pow(2, exponent));
  const array = power.toString().split("");
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + parseInt(array[i]);
  }
  return sum;
}
