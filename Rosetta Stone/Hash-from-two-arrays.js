//create object where each key from keys has value from vals at same index.
function arrToObj(keys, vals) {
  let obj = {};
  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = vals[i];
  }
  return obj;
}
