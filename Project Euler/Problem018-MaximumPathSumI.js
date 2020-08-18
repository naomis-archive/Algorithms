function maximumPathSumI(triangle) {
  let sum = triangle[0][0];
  let position = 0;
  for (let i = 0; i < triangle.length - 1; i++) {
    let left = triangle[i + 1][position];
    let right = triangle[i + 1][position + 1];
    if (left < right) {
      sum = sum + right;
      position++;
    } else {
      sum = sum + left;
    }
    console.log(sum, left, right, position);
  }
  return sum;
}
