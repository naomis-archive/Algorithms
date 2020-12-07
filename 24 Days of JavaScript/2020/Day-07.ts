/**
 * You are given a string s that consists of only lowercase English letters.
 * If vowels are given a value of 1 and consonants a value of 2, return
 * the sum of all letters in the input string.
 * @param str 
 */
const countVowelConsonant = (str: string): number => {
    const vowels = str.match(new RegExp(/[aeiou]/, "ig"))?.length || 0;
    const consonants = str.length - vowels;
    return consonants * 2 + vowels;
}

/**
 * Test Cases
 */
console.log(countVowelConsonant("abcde") === 8);