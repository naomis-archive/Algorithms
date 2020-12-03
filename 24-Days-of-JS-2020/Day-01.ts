/**
 * n children have got m pieces of candy. They want to eat as much candy
 * as they can, but each child must eat exactly the same amount of candy.
 * Determine how many pieces of candy will be eaten by all the children
 * together. Individual pieces of candy cannot be split.
 * @param children 
 * @param candy 
 */

const candies = (children: number, candy: number): number => {
  return Math.floor(candy / children) * children;
};

/**
 * Test Cases
 */
console.log(candies(3, 10) === 9);
