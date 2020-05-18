function rot13(str) {
  let testArray = str.split("");
  //test and replace!
  for (let pos = 0; pos < testArray.length; pos++) {
    if (testArray[pos].charCodeAt() < 65) {
      continue;
    }
    if (testArray[pos].charCodeAt() > 90) {
      continue;
    }
    let value = testArray[pos].charCodeAt() + 13;
    if (value > 90) {
      value = value - 26;
    }
    testArray.splice(pos, 1, String.fromCharCode(value));
  }
  //restring
  let newstring = testArray.join("");
  console.log(newstring);
  return newstring;
}
