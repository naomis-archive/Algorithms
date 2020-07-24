//reverse array without higher-order function
reverse = function (array) {
  const revArray = [];
  array.forEach((el) => revArray.unshift(el));
  return revArray;
};
