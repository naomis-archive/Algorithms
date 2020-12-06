/**
 * Reverse the provided string
 */
const reverseAString = (original: string): string => {
    return original.split("").reverse().join("");
}

/**
 * Test Cases
 */
console.log(reverseAString('hello') === "olleh")