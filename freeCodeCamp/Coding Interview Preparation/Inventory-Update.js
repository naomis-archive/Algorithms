function updateInventory(arr1, arr2) {
  const inventory = {};
  arr1.forEach((el) => (inventory[el[1]] = el[0]));
  arr2.forEach((el) =>
    inventory.hasOwnProperty(el[1])
      ? (inventory[el[1]] += el[0])
      : (inventory[el[1]] = el[0])
  );
  return Object.entries(inventory)
    .sort()
    .map((el) => [el[1], el[0]]);
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];
