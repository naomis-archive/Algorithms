function twoSum(nums: number[], target: number): number[] | undefined {
  for (let i = 0; i < nums.length; i++) {
    const second = nums.indexOf(target - nums[i]);
    if (second === -1) continue;
    if (second > i) return [i, second];
    if (second < i) return [second, i];
  }
}
