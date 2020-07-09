function palindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[\W_]/g, "");
  let match = 0;
  for (let pos = 0; pos < str.length; pos++) {
    if (str.charAt(pos) == str.charAt(str.length - 1 - pos)) {
      match = match + 1;
    }
  }
  if (match == str.length) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}
