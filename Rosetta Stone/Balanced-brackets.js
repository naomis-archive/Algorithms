//check for [ and ], no ] before [, brackets nested appropriately.
let count = 0;
function isBalanced(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
    if (str.charAt(i) === "[") {
      count = count + 1;
    }
    if (str.charAt(i) === "]") {
      count = count - 1;
    }
    if (count < 0) {
      return false;
    }
  }
  if (count !== 0) {
    return false;
  }
  return true;
}
