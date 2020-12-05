/**
 * Write a function that splits an array (first argument) into
 * groups the length of size and returns them as a two-dimensional array
 * @param array
 * @param {number} size
 */
const chunkyMonkey = <T extends any>(array: T[], size: number): T[][] => {
  const result = [];
  while (array.length) {
    let temp = [];
    for (let i = 1; i <= size; i++) {
      if (!array[0]) break;
      temp.push(array.shift());
    }
    result.push(temp);
    temp = [];
  }
  return result;
};

/**
 * Test Cases
 */
console.log(chunkyMonkey(["a", "b", "c", "d", "e"], 2));
