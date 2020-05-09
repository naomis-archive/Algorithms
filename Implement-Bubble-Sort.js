/*Bubble sort works by checking if value is larger than next value, and pushing it toward end*/
function bubbleSort(array) {
  for (let iteration = 0; iteration < array.length-1; iteration++)
    if (array[iteration] > array[iteration+1]) {
      let temp = array[iteration]
      array.splice(iteration, 1)
      array.push(temp)
      //start loop over again
      iteration = -1
    }
  return array;
}
