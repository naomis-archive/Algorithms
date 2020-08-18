//this function checks the products of two numbers containing n digits each
//and returns the largest product which is a palindrome.
function largestPalindromeProduct(n) {
  //check if its Palindrome
  function isPalindrome(str) {
    str = str.toString();
    for (let i = 0; i <= str.length; i++) {
      if (str.charAt(0 + i) !== str.charAt(str.length - 1 - i)) {
        return false;
      }
    }
  }
  // set constraints
  let i = "9".repeat(n);
  let j = "9".repeat(n);
  i = Number(i);
  j = Number(j);
  let min = (i + 1) / 10;
  let end = [];
  //loop through possible products
  for ("9".repeat(n); i >= min; i--) {
    for (j = "9".repeat(n); j >= min; j--) {
      let product = i * j;
      if (isPalindrome(product) !== false) {
        end.push(product);
        break;
      }
    }
  }
  //return largest product result
  let result = Math.max(...end);
  return result;
}
