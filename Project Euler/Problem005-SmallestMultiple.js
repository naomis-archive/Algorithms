//this function finds the least common multiple of all numbers from 1 to n.
function smallestMult(n) {
  let iteration = 1;
  let numArr = [];
  let lcm = 1;
  //fill numArr
  while (iteration <= n) {
    numArr.push(iteration);
    iteration++;
  }
  //set up functions
  function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
  }

  function lcmFunc(a, b) {
    return (a * b) / gcd(a, b);
  }
  //run function on numArr
  for (iteration = 0; iteration < numArr.length; iteration++) {
    lcm = lcmFunc(lcm, numArr[iteration]);
  }
  return lcm;
}
