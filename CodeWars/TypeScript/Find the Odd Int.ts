//find the value that appears an odd number of times in the array
export const findOdd = (xs: number[]): number => {
  const counts: any = {};
  for (let i = 0; i < xs.length; i++) {
    counts[xs[i]] ? counts[xs[i]]++ : (counts[xs[i]] = 1);
  }
  for (let i = 0; i < Object.keys(counts).length; i++) {
    if (counts[Object.keys(counts)[i]] % 2 == 1) {
      return Number(Object.keys(counts)[i]);
    }
  }
  return 0;
};
