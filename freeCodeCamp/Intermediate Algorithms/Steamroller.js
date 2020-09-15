//flatten an array without flat
function steamrollArray(arr, d = 5) {
  return d > 0
    ? arr.reduce(
        (a, el) => a.concat(Array.isArray(el) ? steamrollArray(el, d - 1) : el),
        []
      )
    : arr.slice();
}
//MDN was *very* helpful for this one :)
