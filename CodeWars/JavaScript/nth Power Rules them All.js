//the sum of the elements in a to the nth power less the sum of the elements in a
function modifiedSum(a, n) {
  return (
    a.reduce((acc, el) => acc + Math.pow(el, n), 0) -
    a.reduce((acc, el) => acc + el, 0)
  );
}
