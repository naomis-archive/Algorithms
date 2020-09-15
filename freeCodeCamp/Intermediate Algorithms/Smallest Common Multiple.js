//Find the LCM of all numbers in the given range arr
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function lcmFunc(a, b) {
  return (a * b) / gcd(a, b);
}

function smallestCommons(arr) {
  let lcm = 1;
  for (let i = Math.min(arr[0], arr[1]); i <= Math.max(arr[0], arr[1]); i++) {
    lcm = lcmFunc(lcm, i);
  }
  return lcm;
}
