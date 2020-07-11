function rot13(str) {
  const testArray = str.split("");
  for (let pos = 0; pos < testArray.length; pos++) {
    if (testArray[pos].charCodeAt() < 65 || testArray[pos].charCodeAt() > 90) {
      continue;
    }
    let value =
      testArray[pos].charCodeAt() + 13 > 90
        ? testArray[pos].charCodeAt() - 13
        : testArray[pos].charCodeAt() + 13;
    testArray[pos] = String.fromCharCode(value);
  }
  return testArray.join("");
}
