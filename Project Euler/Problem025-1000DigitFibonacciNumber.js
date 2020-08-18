//find the position of the first Fibonacci number to have n digits
function digitFibonacci(n) {
  const fibArr = [1, 1];
  while (fibArr[fibArr.length - 1].toString().length < n) {
    const fibNum = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
    fibArr.push(fibNum);
  }
  return fibArr.length;
}
