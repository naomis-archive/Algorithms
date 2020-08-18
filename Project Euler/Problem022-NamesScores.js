/* Taking an array of 5000 names, sort it alphabetically
 * Then get the sum of the alphanumeric value of each name, multiply by the
 * name's position in the array, and return the total of all said name values.
 */
function namesScores(arr) {
  let sum = 0;
  arr.sort();
  arr.forEach(function(element) {
    const elementArray = element.split("");
    let subsum = 0;
    elementArray.forEach(function(subelement) {
      subsum = subsum + subelement.charCodeAt() - 64;
    });
    sum = sum + subsum * (arr.indexOf(element) + 1);
  });
  return sum;
}

// Test arrays
const test1 = ["THIS", "IS", "ONLY", "A", "TEST"];
const test2 = ["I", "REPEAT", "THIS", "IS", "ONLY", "A", "TEST"];
