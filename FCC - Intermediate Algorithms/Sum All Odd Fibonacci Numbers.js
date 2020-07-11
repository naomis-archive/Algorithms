function sumFibs(num) {
  let sum = 2,
    first = 1,
    second = 1,
    next = 2;
  while (next <= num) {
    first = second;
    second = next;
    next = first + second;
    if (next % 2 !== 0) sum += next;
  }
  return sum - next;
}
