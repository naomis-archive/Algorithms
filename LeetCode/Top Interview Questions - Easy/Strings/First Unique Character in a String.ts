function firstUniqChar(s: string): number {
  for (let i = 0; i < s.length; i++) {
    if (i === s.lastIndexOf(s[i]) && i === s.indexOf(s[i])) return i;
  }
  return -1;
}
