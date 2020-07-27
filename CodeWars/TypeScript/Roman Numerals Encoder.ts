export function solution(num: number): string {
  const converter = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  //interestingly enough, have written this before - but the TS engine on CodeWars doesn't support ES2017 - so Object.values was not available.
  const values = Object.keys(converter).map((key) => converter[key]);
  let result = "";
  for (let i = 0; i < Object.keys(converter).length; i++) {
    while (num >= values[i]) {
      result = result + Object.keys(converter)[i];
      num = num - values[i];
    }
  }
  return result;
}
