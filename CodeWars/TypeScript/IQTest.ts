//he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

export function iqTest(numbers: string): number {
  const array = numbers.split(" ");
  if (array.filter((el) => parseInt(el) % 2 === 0).length === 1)
    return array.indexOf(array.filter((el) => parseInt(el) % 2 === 0)[0]) + 1;
  return array.indexOf(array.filter((el) => parseInt(el) % 2 === 1)[0]) + 1;
}
