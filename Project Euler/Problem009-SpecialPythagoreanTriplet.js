//this product finds a special pythagorean triplet
//where a^2 + b^2 = c^2, and a<b<c, and a + b + c = n
function specialPythagoreanTriplet(n) {
  let product;
  let a;
  for (a = 1; a < n / 3; a++) {
    let b;
    for (b = a + 1; b < (n - a) / 2; b++) {
      let c = n - a - b;
      if (Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2)) {
        let product = a * b * c;
        return product;
      }
    }
  }
}
