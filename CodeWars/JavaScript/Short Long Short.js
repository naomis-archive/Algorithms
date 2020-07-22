//put the longer string between two instances of shorter string

function solution(a, b) {
  let short, long;
  if (a.length < b.length) (short = a), (long = b);
  if (b.length < a.length) (short = b), (long = a);
  return `${short}${long}${short}`;
}
