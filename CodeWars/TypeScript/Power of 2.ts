//is n a power of 2?
export function isPowerOfTwo(n: number): boolean {
  return Math.log2(n) % 1 === 0;
}
