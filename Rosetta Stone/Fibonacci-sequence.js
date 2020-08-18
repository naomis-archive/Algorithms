//find the n-th fibonacci number
function fibonacci(n) {
  let fibArr = [1, 1];
  for (let i = 1; fibArr.length < n; i++) {
    fibArr.push(fibArr[i] + fibArr[i - 1]);
  }
  return fibArr[fibArr.length - 1];
}
