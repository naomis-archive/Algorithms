//Loop over multiple arrays and create a new array whose nth element is the concatenation of nth element of each of the given.
function loopSimult(A) {
  let i = 0;
  let result = [];
  while (i < A[0].length) {
    let string = "";
    for (let j = 0; j < A.length; j++) {
      string = string + A[j][i];
    }
    result.push(string);
    i++;
  }
  console.log(result);
  return result;
}
