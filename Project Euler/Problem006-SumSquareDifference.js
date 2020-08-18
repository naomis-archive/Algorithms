//this function finds the sum of all numbers 1 to n, each squared
//and the square of the sum of all numbers 1 to n,
//and returns the difference between those values.
function sumSquareDifference(n) {
  let sumSquares = 0;
  let sumToSquare = 0;
  let i = 1;
  while (i <= n) {
    //find the sum of all squares
    sumSquares = sumSquares + Math.pow(i, 2);
    //find the square of the sum of all numbers
    sumToSquare = sumToSquare + i;
    i++;
  }
  let answer = Math.pow(sumToSquare, 2) - sumSquares;
  return answer;
}

sumSquareDifference(100);
