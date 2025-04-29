const {
    reverseString,
    sumOfArray,
    cleanString
} = require('../stringUtils');

describe('reverseString', () => {
    test('should reverse a string', () => {
        expect(reverseString('hello')).toBe('olleh');
    });

    test('should throw TypeError for non-string input', () => {
        expect(() => reverseString(123)).toThrow(TypeError);
    });
});

describe('sumOfArray', () => {
    test('should sum array elements', () => {
        expect(sumOfArray([1, 2, 3])).toBe(6);
    });

    test('should throw TypeError for non-array input', () => {
        expect(() => sumOfArray('not an array')).toThrow(TypeError);
    });
});

describe('cleanString', () => {
    test('should clean string by removing non-alphanumeric characters', () => {
        expect(cleanString('Hello, World!')).toBe('helloworld');
    });

    test('should throw TypeError for non-string input', () => {
        expect(() => cleanString(123)).toThrow(TypeError);
    });
});