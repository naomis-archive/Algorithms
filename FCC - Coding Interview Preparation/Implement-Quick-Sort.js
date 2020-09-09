function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const pivot = array[middle];
  const smaller = [],
    same = [],
    bigger = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > pivot) {
      bigger.push(array[i]);
      continue;
    }
    if (array[i] < pivot) {
      smaller.push(array[i]);
      continue;
    }
    same.push(array[i]);
  }
  console.log(smaller, bigger);
  if (!smaller.length) return same.concat(quickSort(bigger));
  if (!bigger.length) return quickSort(smaller).concat(same);
  return quickSort(smaller).concat(same).concat(quickSort(bigger));
}
