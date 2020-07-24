//find the greatest difference between any two elements of the array

function maxDiff(list) {
  return list.length > 0 ? Math.max(...list) - Math.min(...list) : 0;
}
