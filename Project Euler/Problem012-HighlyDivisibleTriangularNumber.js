function divisibleTriangleNumber(n) {
  let i = Math.floor(n * 1.5);
  while (i) {
    let sum = 0;
    //get triangular number
    for (let j = 1; j < i; j++) {
      sum = sum + j;
    }
    let count = 0;
    //get divisors of triangular number
    for (let k = 1; k * k <= sum; k++) {
      if (sum % k == 0) {
        count = count + 2;
      }
      if (count > n) {
        return sum;
      }
    }

    i++;
  }
}
