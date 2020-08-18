//this function finds the n-th prime number.
function nthPrime(n) {
  let primeArr = [2];
  //construct prime array up to nth number
  for (let i = 3, x = 1; x < n; i++) {
    let testvalue = 0;
    for (let j = 0; j < primeArr.length; j++) {
      if (i % primeArr[j] == 0) {
        //this means i is not prime
        testvalue = 1;
      }
    }
    //if i IS prime, push
    if (testvalue == 0) {
      primeArr.push(i);
      x++;
    }
  }
  //return the last value in the array, the largest prime number
  return primeArr[primeArr.length - 1];
}

nthPrime(10001);
