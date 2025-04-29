const { cleanString } = require('./stringUtils');

/**
 * Validates if the input is a valid number
 * @param {any} value - The value to check
 * @throws {TypeError} If the value is not a valid number
 */
const validateNumber = (value) => {
    if (typeof value !== 'number' || isNaN(value)) {
        throw new TypeError('Array must contain only numbers');
    }
};

/**
 * Validates if the input is an array
 * @param {any} arr - The input to validate
 * @throws {TypeError} If the input is not an array
 */
const validateArray = (arr) => {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }
};

/**
 * Calculates the sum of all elements in an array of numbers
 * @param {number[]} arr - The input array of numbers
 * @returns {number} The sum of all elements
 * @throws {TypeError} If the input is invalid
 */
const sumOfArray = (arr) => {
    validateArray(arr);
    return arr.reduce((sum, num) => {
        validateNumber(num);
        return sum + num;
    }, 0);
};

/**
 * Reverses the input string
 * @param {string} str - The input string to reverse
 * @returns {string} The reversed string
 */
function reverseString(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }
    return str.split('').reverse().join('');
}

/**
 * Checks if the input string is a palindrome
 * @param {string} str - The input string to check
 * @returns {boolean} True if the string is a palindrome, false otherwise
 */
function isPalindrome(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }
    const cleanStr = cleanString(str);
    return cleanStr === cleanStr.split('').reverse().join('');
}

/**
 * Finds the largest number in an array
 * @param {number[]} arr - The input array of numbers
 * @returns {number} The largest number in the array
 */
function findMax(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }
    if (arr.length === 0) {
        throw new Error('Array cannot be empty');
    }
    if (!arr.every(num => typeof num === 'number' && !isNaN(num))) {
        throw new TypeError('Array must contain only numbers');
    }
    return Math.max(...arr);
}

// Update the exports to include sumOfArray
module.exports = {
    reverseString,
    isPalindrome,
    findMax,
    sumOfArray
};