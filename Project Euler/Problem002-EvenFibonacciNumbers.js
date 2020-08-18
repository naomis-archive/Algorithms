//this number finds all even Fibonacci numbers less than n
//and returns the sum.
function fiboEvenSum(n) {
  //setup fibonacci array
  let fibArr = [1, 1];
  let sum = 0;
  //generate fibonacci sequence up to n
  for (let i = 0; fibArr[fibArr.length - 1] < n; i++) {
    let sum = fibArr[0 + i] + fibArr[1 + i];
    fibArr.push(sum);
  }
  //delete last number of fibArr if it's bigger than n
  if (fibArr[fibArr.length - 1] > n) {
    fibArr.pop();
  }
  //add only even numbers
  for (let j = 0; j < fibArr.length; j++) {
    if (fibArr[j] % 2 == 0) {
      sum = sum + fibArr[j];
    }
  }
  return sum;
}
