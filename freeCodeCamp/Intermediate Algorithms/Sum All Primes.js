//find the sum of all primes <= num
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function sumPrimes(num) {
  let sum = 0;
  if (num === 2) return num;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) sum += i;
  }
  return sum;
}
