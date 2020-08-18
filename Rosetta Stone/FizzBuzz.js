/*
Write a program that generates an array of integers from 1 to 100 (inclusive). But:
for multiples of 3, add "Fizz" to the array instead of the number
for multiples of 5, add "Buzz" to the array instead of the number
for multiples of 3 and 5, add "FizzBuzz" to the array instead of the number
*/
function fizzBuzz() {
  let fizzBuzzArr = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      fizzBuzzArr.push("FizzBuzz");
      continue;
    }
    if (i % 3 === 0) {
      fizzBuzzArr.push("Fizz");
      continue;
    }
    if (i % 5 === 0) {
      fizzBuzzArr.push("Buzz");
      continue;
    }
    fizzBuzzArr.push(i);
  }

  return fizzBuzzArr;
}
