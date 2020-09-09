function selectionSort(array, startIndex = 0) {
  if (startIndex >= array.length) {
    return array;
  }
  const target = Math.min(...array.slice(startIndex));
  const targetIndex = array.slice(startIndex).indexOf(target);
  const deleted = array[startIndex];
  array.splice(startIndex, 1, target);
  array.splice(targetIndex + startIndex, 1, deleted);
  return selectionSort(array, startIndex + 1);
}
