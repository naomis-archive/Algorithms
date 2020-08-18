//this function finds the sum of all primes below n

//function to check for primes
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

//function to sum primes
function primeSummation(n) {
  let sum = 0;
  for (let j = 2; j < n; j++) {
    if (isPrime(j)) {
      sum = sum + j;
    }
  }
  return sum;
}
