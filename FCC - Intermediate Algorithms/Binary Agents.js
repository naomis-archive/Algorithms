//turn a string of binary into ASCII
function binaryAgent(str) {
  return str
    .split(" ")
    .map((el) => String.fromCharCode(parseInt(el, 2)))
    .join("");
}
