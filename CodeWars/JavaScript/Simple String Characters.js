//count the uppercase, lowercase, numbers, and special characters in string.
function solve(s) {
  let upper = 0,
    lower = 0,
    num = 0,
    spec = 0;
  for (let i = 0; i < s.length; i++) {
    if ((s.charCodeAt(i) >= 65) & (s.charCodeAt(i) <= 90)) {
      upper++;
      continue;
    }
    if ((s.charCodeAt(i) >= 97) & (s.charCodeAt(i) <= 122)) {
      lower++;
      continue;
    }
    if (!isNaN(parseInt(s[i]))) {
      num++;
      continue;
    }
    spec++;
  }
  return [upper, lower, num, spec];
}
