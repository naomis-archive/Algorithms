//take string and number, return first number characters of string and "...", or return string if number is greater than length.
function truncateString(str, num) {
  return num >= str.length ? str : str.substring(0, num) + "...";
}
