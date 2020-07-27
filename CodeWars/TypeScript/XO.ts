//check if string has same number of xs and os
export function xo(str: string) {
  const counts: any = { x: 0, o: 0 };
  const test = str.toLowerCase().split("");
  for (let i = 0; i < test.length; i++) {
    if (test[i] === "x") counts.x++;
    if (test[i] === "o") counts.o++;
  }
  return counts.x === counts.o;
}
