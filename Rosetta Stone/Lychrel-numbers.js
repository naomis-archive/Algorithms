/* a Lychrel number is any starting number that does not form a palindrome within 500 (or more) iterations, where
Take an integer n₀, greater than zero.
Form the next number n of the series by reversing n₀ and adding it to n₀
Stop when n becomes palindromic - i.e. the digits of n in reverse order == n.
*/
function reversenum(num) {
  return num
    .toString()
    .split("")
    .reverse()
    .join("");
}

function isLychrel(n) {
  let i = 1;
  while (i < 499) {
    let newNum = n + parseInt(reversenum(n));
    if (newNum == reversenum(newNum)) {
      return false;
    }
    n = newNum;
    i++;
  }
  return true;
}
