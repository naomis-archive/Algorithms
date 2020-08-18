//check if all strings in array are the same.
function allEqual(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      return false;
    }
  }
  return true;
}

//check if strings are sorted alphabetically.
function azSorted(arr) {
  let arrstr = arr.join("|");
  let arrcopy = arrstr.split("|");
  let sortArr = arr.sort();
  console.log(arrcopy, sortArr);
  if (arr.length <= 1) {
    return true;
  }
  if (allEqual(arr) == true) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (sortArr[i] !== arrcopy[i]) {
      return false;
    }
  }

  return true;
}
console.log(azSorted(["BB", "AA"]));
