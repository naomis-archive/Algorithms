//take a collection and source object, return array of objects in collection that include source properties
function whatIsInAName(collection, source) {
  return collection.filter((el) =>
    Object.entries(source).every(([key, value]) => el[key] === value)
  );
}
//kudos to Brad Taniguchi for helping with this one :P
