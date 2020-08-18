//find LCM of numbers in array
function LCM(A) {
  let lcm = 1;
  function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
  }

  function lcmFunc(a, b) {
    return (a * b) / gcd(a, b);
  }

  for (let i = 0; i < A.length; i++) {
    lcm = lcmFunc(lcm, A[i]);
  }
  console.log(lcm);
  return lcm;
}
