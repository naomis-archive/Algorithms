//find the number of SE paths for a gridSize*gridSize grid.
function factorial(num) {
  let product = 1;
  for (let i = 1; i <= num; i++) {
    product = product * i;
  }
  return product;
}

function latticePaths(gridSize) {
  const n = gridSize + gridSize;
  const k = gridSize;
  const choices = factorial(n) / (factorial(k) * factorial(n - k));
  return choices;
}
