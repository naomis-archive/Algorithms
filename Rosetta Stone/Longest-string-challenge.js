//find the strings that are the longest among the given strings.
function longestString(strings) {
  let result = [];
  let length = 1;
  strings.forEach(string => {
    if (string.length > length) {
      length = string.length;
    }
  });
  strings.forEach(string => {
    if (string.length === length) {
      result.push(string);
    }
  });
  return result;
}
