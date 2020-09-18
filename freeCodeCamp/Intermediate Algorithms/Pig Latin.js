function translatePigLatin(str) {
    const vowelRegex = /[aeiou]/
    if (vowelRegex.test(str[0])) return str + "way";
    if (!vowelRegex.test(str)) return str + "ay";
    const index = str.match(vowelRegex).index
    return str.substring(index) + str.substring(0, index) + "ay"
  }