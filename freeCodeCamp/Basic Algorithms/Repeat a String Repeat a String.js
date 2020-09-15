//take a string and number, repeat string number times. If number is <= 0, return ""
//Special Rule: cannot use .repeat
function repeatStringNumTimes(str, num) {
  return num <= 0 ? "" : repeatStringNumTimes(str, num - 1) + str;
}
