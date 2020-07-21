//replace each digit of num with its square
export class Kata {
  static squareDigits(num: number) {
    return parseInt(
      num
        .toString()
        .split("")
        .map((el) => parseInt(el) ** 2)
        .join("")
    );
  }
}
