// stringUtils.js

const ALPHANUMERIC_REGEX = /[^a-z0-9]/g;

/**
 * Reverses a string
 * @param {string} str - The input string
 * @returns {string} - The reversed string
 * @throws {TypeError} - If input is not a string
 */
const reverseString = (str) => {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }
    return str.split('').reverse().join('');
};

/**
 * Calculates a sum of array elements
 * @param {number[]} arr - The input array
 * @returns {number} - The sum of array elements
 * @throws {TypeError} - If input is not an array of numbers
 */
const sumOfArray = (arr) => {
    if (!Array.isArray(arr) || !arr.every(num => typeof num === 'number')) {
        throw new TypeError('Input must be an array of numbers');
    }
    return arr.reduce((sum, current) => sum + current, 0);
};

/**
 * Cleans a string by removing all non-alphanumeric characters and converting to lowercase
 * @param {string} str - The input string
 * @returns {string} - The cleaned string
 * @throws {TypeError} - If input is not a string
 */
const cleanString = (str) => {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }
    return str.toLowerCase().replace(ALPHANUMERIC_REGEX, '');
};

module.exports = {
    reverseString,
    sumOfArray,
    cleanString
};