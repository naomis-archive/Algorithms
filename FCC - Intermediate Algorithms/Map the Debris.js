//gets the name and orbital period for each object in an array, where the object has a name and average altitude
function orbitalPeriod(arr) {
  return arr.map((el) => {
    return {
      name: el.name,
      orbitalPeriod: Math.round(
        2 *
          Math.PI *
          Math.sqrt(Math.pow(el.avgAlt + 6367.4447, 3) / 398600.4418)
      ),
    };
  });
}
