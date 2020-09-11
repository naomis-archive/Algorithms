function checkSet(arrToBeSet, checkValue) {
  // change code below this line
  const set = new Set(arrToBeSet);
  const has = set.has(checkValue);
  const size = set.size;
  return [has, size];
  // change code above this line
}
