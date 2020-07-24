export class Kata {
  static dnaStrand(dna: string) {
    interface dna {
      A: string;
      T: string;
      G: string;
      C: string;
      [key: string]: string;
    }
    const pairs: dna = { A: "T", T: "A", G: "C", C: "G" };
    return dna
      .split("")
      .map((el: string) => pairs[el])
      .join("");
  }
}
