//What is the smallest positive integer whose square ends in the digits 269,696?
function babbage(babbageNum, endDigits) {
  for (let i = 519; i < babbageNum; i++) {
    let powString = Math.pow(i, 2).toString();
    let endString = endDigits.toString();
    if (powString.includes(endString)) {
      return i;
    }
  }
}
