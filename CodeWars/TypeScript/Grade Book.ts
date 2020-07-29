//calculate the letter grade from the three percent scores given
export function getGrade(a: number, b: number, c: number) {
  const avg = (a + b + c) / 3;
  if (avg >= 90) return "A";
  if (avg >= 80) return "B";
  if (avg >= 70) return "C";
  if (avg >= 60) return "D";
  return "F";
}
