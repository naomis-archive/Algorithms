//determine how many times the subStr appears in the str
function countSubstring(str, subStr) {
  const count = str.split(subStr);
  return count.length - 1;
}
countSubstring("the three truths", "th");
