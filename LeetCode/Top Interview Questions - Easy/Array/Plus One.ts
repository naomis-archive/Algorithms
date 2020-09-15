function plusOne(digits: number[]): number[] {
  digits[digits.length - 1]++;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] >= 10) {
      digits[i] -= 10;
      i > 0 ? digits[i - 1]++ : digits.unshift(1);
    } else return digits;
  }
  return digits;
}
