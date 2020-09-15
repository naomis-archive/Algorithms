function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (array[j] < array[j - 1]) {
      const small = array[j];
      const big = array[j - 1];
      array.splice(j, 1, big);
      array.splice(j - 1, 1, small);
      j--;
    }
  }
  return array;
}
