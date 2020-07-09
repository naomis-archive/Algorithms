//replace before in str with after, matching case.
function myReplace(str, before, after) {
  return before[0].toUpperCase() == before[0]
    ? str.replace(before, after[0].toUpperCase() + after.substring(1))
    : str.replace(before, after);
}
