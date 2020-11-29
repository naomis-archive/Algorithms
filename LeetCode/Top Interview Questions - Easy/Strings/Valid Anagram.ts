function isAnagram(s: string, t: string): boolean {
  const sCounts: { [key: string]: number } = {};
  s.split("").forEach((letter) =>
    sCounts.hasOwnProperty(letter) ? sCounts[letter]++ : (sCounts[letter] = 1)
  );
  const tCounts: { [key: string]: number } = {};
  t.split("").forEach((letter) =>
    tCounts.hasOwnProperty(letter) ? tCounts[letter]++ : (tCounts[letter] = 1)
  );
  for (const key in sCounts) {
    if (!tCounts[key] || tCounts[key] !== sCounts[key]) return false;
  }
  for (const key in tCounts) {
    if (!sCounts[key] || tCounts[key] !== sCounts[key]) return false;
  }
  return true;
}
