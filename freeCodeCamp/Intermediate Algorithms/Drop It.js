// remove the elements from the array that fail the function, stop at first true element
function dropElements(arr, func) {
  return arr.findIndex(func) > -1
    ? arr.slice(arr.findIndex(func), arr.length)
    : [];
}
