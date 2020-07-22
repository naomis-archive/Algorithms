//turn a string into fake binary - digits less than 5 become 0, 5 or greater become 1

function fakeBin(x) {
  return x
    .split("")
    .map((el) => (el < 5 ? "0" : "1"))
    .join("");
}
