function isPalindrome(s: string): boolean {
  const sanitised = s
    .replace(/[\s\W_]/g, "")
    .toLowerCase()
    .split("");
  return sanitised.join("") === sanitised.reverse().join("");
}
