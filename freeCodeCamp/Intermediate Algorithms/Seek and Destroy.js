//take an array and any number of arguments, return the array with all argument values removed.
function destroyer(arr) {
  return arr.filter((el) => [...arguments].indexOf(el) === -1);
}
