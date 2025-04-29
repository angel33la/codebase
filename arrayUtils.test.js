const { isPalindrome, findMax } = require('./index.js');

describe('isPalindrome', () => {
    test('should return true for palindrome strings', () => {
        expect(isPalindrome('racecar')).toBe(true);
        expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
        expect(isPalindrome('Was it a car or a cat I saw')).toBe(true);
    });

    test('should return false for non-palindrome strings', () => {
        expect(isPalindrome('hello')).toBe(false);
        expect(isPalindrome('world')).toBe(false);
        expect(isPalindrome('javascript')).toBe(false);
    });

    test('should handle empty strings', () => {
        expect(isPalindrome('')).toBe(true);
    });

    test('should throw TypeError for non-string inputs', () => {
        expect(() => isPalindrome(123)).toThrow(TypeError);
        expect(() => isPalindrome(null)).toThrow(TypeError);
        expect(() => isPalindrome(undefined)).toThrow(TypeError);
        expect(() => isPalindrome([])).toThrow(TypeError);
    });
});

describe('findMax', () => {
    test('should find maximum number in array', () => {
        expect(findMax([1, 2, 3, 4, 5])).toBe(5);
        expect(findMax([5, 4, 3, 2, 1])).toBe(5);
        expect(findMax([-1, -5, -3, -2])).toBe(-1);
    });

    test('should work with single element arrays', () => {
        expect(findMax([42])).toBe(42);
    });

    test('should handle decimal numbers', () => {
        expect(findMax([1.5, 2.7, 3.2, 2.1])).toBe(3.2);
    });

    test('should throw TypeError for non-array input', () => {
        expect(() => findMax('not an array')).toThrow(TypeError);
        expect(() => findMax(123)).toThrow(TypeError);
        expect(() => findMax(null)).toThrow(TypeError);
    });

    test('should throw Error for empty arrays', () => {
        expect(() => findMax([])).toThrow('Array cannot be empty');
    });

    test('should throw TypeError for arrays with non-number elements', () => {
        expect(() => findMax([1, 'two', 3])).toThrow(TypeError);
        expect(() => findMax([1, null, 3])).toThrow(TypeError);
        expect(() => findMax([1, NaN, 3])).toThrow(TypeError);
    });
});