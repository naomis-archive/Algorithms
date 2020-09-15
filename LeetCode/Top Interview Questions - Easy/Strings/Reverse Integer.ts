function reverse(x: number): number {
  if (x > 2147483647 || x < -2147483648) return 0;
  let stringed = x.toString();
  let neg = false;
  if (stringed[0] === "-") {
    stringed = stringed.substring(1);
    neg = true;
  }
  stringed = stringed.split("").reverse().join("");
  let revNum = parseInt(stringed);
  if (neg) revNum = 0 - revNum;
  if (revNum > 2147483647 || revNum < -2147483648) return 0;
  return revNum;
}
