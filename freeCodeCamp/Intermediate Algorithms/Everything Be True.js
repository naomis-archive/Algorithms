//confirm if every object in collection has true value for key "pre"
function truthCheck(collection, pre) {
  return collection.every((el) => el[pre]);
}
