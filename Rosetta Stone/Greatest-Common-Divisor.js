//find the GCD of two numbers.
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

//this is a useful algorithm - can be used to find LCM.
