function pairwise(arr, arg) {
  const pairs = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === arg) {
        pairs.push([i, j]);
        arr.splice(i, 1, "x");
        arr.splice(j, 1, "y");
      }
    }
  }
  return pairs.flat().reduce((acc, el) => acc + el, 0);
}
