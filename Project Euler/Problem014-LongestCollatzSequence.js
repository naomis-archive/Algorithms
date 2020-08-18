//find the number below limit that produces the longest collatz sequence
function longestCollatzSequence(limit) {
  let result = limit;
  let finalcount = 0;
  for (let i = limit; i > limit / 2; i--) {
    let count = 0;
    let num = i;
    while (num > 4) {
      if (num % 2 == 0) {
        num = num / 2;
        count++;
      }
      if (num % 2 == 1) {
        num = 3 * num + 1;
        count++;
      }
      if (num == 4) {
        num = 1;
        count = count + 2;
      }
    }
    if (count > finalcount) {
      finalcount = count;
      result = i;
    }
  }
  return result;
}
