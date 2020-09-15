function getIndexToIns(arr, num) {
  return arr.sort((a, b) => a - b).findIndex((el) => el >= num) >= 0
    ? arr.sort((a, b) => a - b).findIndex((el) => el >= num)
    : arr.length;
}
