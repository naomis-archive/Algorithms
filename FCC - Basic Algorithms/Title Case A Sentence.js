//take a string, return the string in Title Case
function titleCase(str) {
  return str
    .split(" ")
    .map(
      (el) => el.substring(0, 1).toUpperCase() + el.substring(1).toLowerCase()
    )
    .join(" ");
}
