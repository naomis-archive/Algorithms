//turn a string of DNA proteins into DNA pairs
function pairElement(str) {
  const obj = {
    G: ["G", "C"],
    C: ["C", "G"],
    A: ["A", "T"],
    T: ["T", "A"],
  };
  return str.split("").map((el) => obj[el]);
}

//could not find a one-line solution yet :(
