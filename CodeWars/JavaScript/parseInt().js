//convert a string of number words into the corresponding integer

function parseInt(string) {
  console.log(string);
  if (string == "zero") return 0;
  const numObj = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
  };
  let num = 0;
  string = string.replace(/-/g, " ");
  const array = string.split(" ").filter((el) => el !== "and");
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    if (!numObj.hasOwnProperty(array[i])) continue;
    if (array[i + 1] == "million") {
      num += numObj[array[i]] * 1000000;
      continue;
    }
    if (
      array[i + 1] == "thousand" ||
      (array[i + 2] == "thousand" && array[i + 1] !== "hundred")
    ) {
      num += numObj[array[i]] * 1000;
      continue;
    }
    if (array[i + 1] == "hundred") {
      if (array.indexOf("thousand") > i + 1) {
        num += numObj[array[i]] * 100 * 1000;
        continue;
      }
      num += numObj[array[i]] * 100;
      continue;
    }
    num += numObj[array[i]];
  }
  return num;
}
