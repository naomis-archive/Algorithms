//find nth square number, skipping squares that are also cubes
function exponentialGenerator(n) {
  let arr = [];
  for (let i = 2; arr.length < n; i++) {
    let exp = Math.pow(i, 2);
    let cube = Math.cbrt(exp);
    if (!Number.isInteger(cube)) {
      arr.push(exp);
    }
  }
  return arr[arr.length - 1];
}
