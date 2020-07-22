//each step takes 1 minutes. Determine if walk takes 10 minutes and returns you to start.
function isValidWalk(walk) {
  if (walk.length !== 10) return false;
  const values = { n: 1, w: 2, e: -2, s: -1 };
  return walk.map((el) => values[el]).reduce((acc, el) => acc + el, 0) == 0;
}
