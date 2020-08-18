//takes multiple sorted arrays of items, and returns one array of sorted items
function mergeLists(lists) {
  let array = lists.flat();
  array = array.sort((a, b) => {
    return a - b;
  });
  return array;
}
