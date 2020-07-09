//turn a string of DNA proteins into DNA pairs
function pairElement(str) {
  const obj = {
    G: "C",
    C: "G",
    A: "T",
    T: "A",
  };
  return str.split("").map((el) => [
    el,
    el.replace(/G|C|A|T/g, function (match) {
      return obj[match];
    }),
  ]);
}

//could not find a one-line solution yet :(