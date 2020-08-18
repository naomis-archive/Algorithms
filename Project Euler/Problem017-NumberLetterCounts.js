//how many letters are needed to write out the numbers from 1 to limit?

//convert each number to words
function numberToLetter(num) {
  let str = "";
  if (num >= 1000) {
    let temparr = num.toString().split("");
    str = str + numberToLetter(temparr[0]) + " thousand";
    num = num - parseInt(temparr[0]) * 1000;
  }
  if (num >= 100 && num % 100 !== 0) {
    let temparr = num.toString().split("");
    str = str + numberToLetter(temparr[0]) + " hundred and";
    num = num - parseInt(temparr[0]) * 100;
  }
  if (num >= 100 && num % 100 == 0) {
    let temparr = num.toString().split("");
    str = str + numberToLetter(temparr[0]) + " hundred";
    num = num - parseInt(temparr[0]) * 100;
  }
  if (num >= 20 && num % 10 !== 0) {
    let temparr = num.toString().split("");
    str = str + numberToLetter(temparr[0] * 10);
    num = num - parseInt(temparr[0]) * 10;
  }
  if (num == 90) {
    str = str + "ninety";
    num = num - 90;
  }
  if (num == 80) {
    str = str + "eighty";
  }
  if (num == 70) {
    str = str + "seventy";
  }
  if (num == 60) {
    str = str + "sixty";
  }
  if (num == 50) {
    str = str + "fifty";
  }
  if (num == 40) {
    str = str + "forty";
  }
  if (num == 30) {
    str = str + "thirty";
  }
  if (num == 20) {
    str = str + "twenty";
  }
  if (num == 19) {
    str = str + "nineteen";
  }
  if (num == 18) {
    str = str + "eighteen";
  }
  if (num == 17) {
    str = str + "seventeen";
  }
  if (num == 16) {
    str = str + "sixteen";
  }
  if (num == 15) {
    str = str + "fifteen";
  }
  if (num == 14) {
    str = str + "fourteen";
  }
  if (num == 13) {
    str = str + "thirteen";
  }
  if (num == 12) {
    str = str + "twelve";
  }
  if (num == 11) {
    str = str + "eleven";
  }
  if (num == 10) {
    str = str + "ten";
  }
  if (num == 9) {
    str = str + "nine";
  }
  if (num == 8) {
    str = str + "eight";
  }
  if (num == 7) {
    str = str + "seven";
  }
  if (num == 6) {
    str = str + "six";
  }
  if (num == 5) {
    str = str + "five";
  }
  if (num == 4) {
    str = str + "four";
  }
  if (num == 3) {
    str = str + "three";
  }
  if (num == 2) {
    str = str + "two";
  }
  if (num == 1) {
    str = str + "one";
  }
  return str;
}

//run the conversion on each number from 1 to limit
function numberLetterCounts(limit) {
  let sum = 0;
  for (let i = limit; i >= 1; i--) {
    const letters = numberToLetter(i);
    const count = letters.replace(/\s/g, "").length;
    sum = sum + count;
  }
  console.log(sum);
  return sum;
}
