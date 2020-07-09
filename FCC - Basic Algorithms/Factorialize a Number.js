//take a number, return the factorial of that number (n!)
function factorialize(num) {
  if (num <= 1) {
    return 1;
  }
  return factorialize(num - 1) * num;
}
