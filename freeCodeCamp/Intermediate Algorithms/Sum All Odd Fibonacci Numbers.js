//find the sum of all odd Fibonacci numbers <= num
function sumFibs(num) {
  let sum = 2,
    first = 1,
    second = 1,
    next = 2;
  while (next <= num) {
    first = second;
    second = next;
    next = first + second;
    if (second % 2 !== 0) sum += second;
  }
  return sum;
}
