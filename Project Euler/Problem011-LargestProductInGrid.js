//find the largest product of 4 adjacent numbers in a grid.
function largestGridProduct(arr) {
  let product = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j < arr[i].length - 3) {
        let htest = arr[i][j] * arr[i][j + 1] * arr[i][j + 2] * arr[i][j + 3];
        if (htest > product) {
          product = htest;
        }
      }
      if (i < arr.length - 3) {
        let vtest = arr[i][j] * arr[i + 1][j] * arr[i + 2][j] * arr[i + 3][j];
        if (vtest > product) {
          product = vtest;
        }
      }
      if (i < arr.length - 3 && j < arr[i].length - 3) {
        let drtest =
          arr[i][j] * arr[i + 1][j + 1] * arr[i + 2][j + 2] * arr[i + 3][j + 3];
        if (drtest > product) {
          product = drtest;
        }
      }
      if (i < arr.length - 3 && j > 3) {
        let dltest =
          arr[i][j] * arr[i + 1][j - 1] * arr[i + 2][j - 2] * arr[i + 3][j - 3];
        if (dltest > product) {
          product = dltest;
        }
      }
    }
  }
  console.log(product);
  return product;
}
