//take a string and target, return true/false if string ends with target.
function confirmEnding(str, target) {
  return new RegExp(target + "$").test(str);
}
