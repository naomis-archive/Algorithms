//how many sundays in the given timeframe occurred on first of month?
function countingSundays(firstYear, lastYear) {
  const start = new Date(firstYear, 0, 1, 0).getTime();
  const end = new Date(lastYear, 11, 31, 0).getTime();
  let firstSundays = 0;
  for (let i = start; i < end; i = i + 86400000) {
    if (new Date(i).getDay() === 0 && new Date(i).getDate() === 1) {
      firstSundays++;
    }
  }
  return firstSundays;
}
