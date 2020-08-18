//finds the factorial of a number n
let product = 1;
function factorial(n) {
  product = product * n;
  if (n > 1) {
    return factorial(n - 1);
  }
  return product;
}
