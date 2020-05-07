function bubbleSort(array) {
  for (let iteration = 0; iteration < array.length-1; iteration++)
    if (array[iteration] > array[iteration+1]) {
      let temp = array[iteration]
      array.splice(iteration, 1)
      array.push(temp)
      iteration = -1
    }
  return array;
}
