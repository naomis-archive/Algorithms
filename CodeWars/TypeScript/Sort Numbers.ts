//sort an array of numbers. Return an empty array for invalid inputs
export function solution(nums: number[]): number[] {
  return nums ? nums.sort((a, b) => a - b) : [];
}
