function intersect(nums1: number[], nums2: number[]): number[] {
  const small = nums1.length > nums2.length ? nums2 : nums1;
  const large = nums1.length > nums2.length ? nums1 : nums2;
  const result: number[] = [];
  small.forEach((el) => {
    if (large.includes(el)) {
      result.push(el);
      large.splice(large.indexOf(el), 1);
    }
  });
  return result;
}
