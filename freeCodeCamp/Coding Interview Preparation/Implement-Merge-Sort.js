function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  return merged(mergeSort(left), mergeSort(right));
}

function merged(array1, array2) {
  const mergeArray = [];
  while (array1.length && array2.length) {
    if (array1[0] < array2[0]) {
      mergeArray.push(array1.shift());
    } else if (array1[0] > array2[0]) {
      mergeArray.push(array2.shift());
    } else mergeArray.push(array1.shift(), array2.shift());
  }
  return mergeArray
    .concat(array1)
    .concat(array2)
    .filter((el) => el);
}
