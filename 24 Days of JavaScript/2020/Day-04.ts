/**
 * Given a year, return the century it is in. The first century spans
 * from the year 1 up to and including the year 100, the second from
 * the year 101 up to and including the year 200, etc.
 * @param num
 */
const centuryFromYear = (num: number): number => {
  return Math.ceil(num / 100);
};

/**
 * Test Cases
 */
console.log(centuryFromYear(1905) === 20);
console.log(centuryFromYear(1700) === 17);
