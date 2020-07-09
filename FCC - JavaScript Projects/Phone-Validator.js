function telephoneCheck(str) {
  //just in case
  let origStr = str;
  //proper brackets
  let openBrack = /\(/;
  let closeBrack = /\)/;
  let bothBrack = /[\(...\)]/;
  if (openBrack.test(str) == true) {
    if (bothBrack.test(str) == false) {
      return false;
    }
  }
  if (closeBrack.test(str) == true) {
    if (bothBrack.test(str) == false) {
      return false;
    }
  }
  //remove symbols
  let numOnly = str.replace(/[-\(\)\s]/g, "");
  //validate country code
  if (numOnly.length == 11) {
    if (numOnly.charAt(0) != 1) {
      console.log("fake country code");
      return false;
    }
  }
  //not enough numbers
  if (numOnly.length > 11 || numOnly.length < 10) {
    console.log("wrong numbers");
    return false;
  }
  //perfect phone number
  if (numOnly.length == 10) {
    if (origStr.length == 10) {
      return true;
    }
  }
  //more brackets >:(
  if (str.charAt(5) == ")") {
    if (str.charAt(1) != "(") {
      return false;
    }
  }
  //time to split the phone number yis
  if (str.charAt(0) == "(") {
    if (str.charAt(4) == ")") {
      str = str.replace(/\(/, "");
    }
  }
  str = str.replace(/\s\(/, " ");
  str = str.replace(/\)\s/, " ");
  console.log(str);
  let chunkArr = str.split(/[-()\s+]/);
  if (numOnly.length == 11) {
    if (chunkArr[0].length != 1) {
      console.log("wrong chunks");
      return false;
    }
    if (chunkArr[1].length != 3) {
      console.log("wrong chunks");
      return false;
    }
    if (chunkArr[2].length != 3) {
      console.log("wrong chunks");
      return false;
    }
    if (chunkArr[3].length != 4) {
      console.log("wrong chunks");
      return false;
    }
  }
  if (numOnly.length == 10) {
    if (chunkArr[0].length != 3) {
      console.log("wrong chunks");
      return false;
    }
    if (chunkArr[1].length != 3) {
      console.log("wrong chunks");
      return false;
    }
    if (chunkArr[2].length != 4) {
      console.log("wrong chunks");
      return false;
    }
  }
  return true;
}
