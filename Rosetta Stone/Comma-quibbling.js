/*Write a function to generate a string output which is the concatenation of input words from a list/sequence where:

An input of no words produces the output string of just the two brace characters
 ("{}")
An input of just one word, e.g. ["ABC"], produces the output string of the word
 inside the two braces, e.g. "{ABC}"
An input of two words, e.g. ["ABC", "DEF"], produces the output string of the
two words inside the two braces with the words separated by the string " and ",
e.g. "{ABC and DEF}"
An input of three or more words, e.g. ["ABC", "DEF", "G", "H"], produces the
output string of all but the last word separated by ", " with the last word
separated by " and " and all within braces; e.g. "{ABC, DEF, G and H}"
*/
function quibble(words) {
  if (words.length == 0) {
    return "{}";
  } else if (words.length == 1) {
    let result = "{" + words[0].toString() + "}";
    return result;
  } else {
    let resultArr = [];
    for (let iteration = 0; iteration < words.length; iteration++) {
      if (iteration == words.length - 2) {
        let endString = words[iteration] + " and " + words[iteration + 1];
        resultArr.push(endString);
        break;
      }
      resultArr.push(words[iteration]);
    }
    let result = "{" + resultArr.join(",") + "}";
    return result;
  }
}
