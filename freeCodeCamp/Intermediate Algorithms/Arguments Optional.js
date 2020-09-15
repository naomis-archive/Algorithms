//sum the two arguments. If only one argument provided, return a function that expects the second argument.
function addTogether() {
  if (
    typeof arguments[0] !== "number" ||
    (arguments[1] && typeof arguments[1] !== "number")
  )
    return undefined;
  if (!arguments[1]) {
    const a = arguments[0];
    return (c) => (typeof c !== "number" ? undefined : a + c);
  }
  return arguments[0] + arguments[1];
}
