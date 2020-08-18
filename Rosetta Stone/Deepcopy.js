//make a deep copy of an object (a deep copy being a brand new object, not a reference to the old object)
function deepcopy(obj) {
  const copy = JSON.parse(JSON.stringify(obj));
  return copy;
}
