//create an identity matrix of size n*n
function idMatrix(n) {
  let bigArr = [];
  for (let i = 0; i < n; i++) {
    let smallArr = [];
    for (let j = 0; j < n; j++) {
      if (j === bigArr.length) {
        smallArr.push(1);
      } else {
        smallArr.push(0);
      }
    }
    bigArr.push(smallArr);
  }
  return bigArr;
}
