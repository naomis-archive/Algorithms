function partsSums(ls) {
  const result = [0];
  for (let i = ls.length - 1; i >= 0; i--) {
    result.push(result[result.length - 1] + ls[i]);
  }
  return result.reverse();
}
