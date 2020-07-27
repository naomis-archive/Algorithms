//reverse each word in a given string
export function reverseWords(str: string): string {
  return str
    .split(" ")
    .map((el) => el.split("").reverse().join(""))
    .join(" ");
}
