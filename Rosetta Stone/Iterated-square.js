//If you add the square of the digits of a Natural number (an integer bigger than zero), you always end with either 1 or 89
function iteratedSquare(n) {
  let str = n.toString();
  let arr = str.split("");
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + Math.pow(arr[i], 2);
  }
  if (sum === 89 || sum === 1) {
    return sum;
  }
  return iteratedSquare(sum);
}
