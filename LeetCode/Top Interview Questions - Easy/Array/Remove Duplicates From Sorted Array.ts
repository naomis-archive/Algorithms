function removeDuplicates(nums: number[]): number {
  nums.splice(
    0,
    nums.length,
    ...nums.filter((num, i) => nums.indexOf(num) === i)
  );
  return nums.length;
}
