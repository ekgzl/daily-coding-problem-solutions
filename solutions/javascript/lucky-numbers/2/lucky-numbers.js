// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let s1 = 0,
    s2 = 0;
  array1.reduce((prev, num) => {
    s1 += prev * num;
    prev /= 10;
    return prev;
  }, Math.pow(10, array1.length - 1));
  array2.reduce((prev, num) => {
    s2 += prev * num;
    prev /= 10;
    return prev;
  }, Math.pow(10, array2.length - 1));
  return s1 + s2;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let stringVal = String(value);
  const stringArr = stringVal.split("");

  for (let i = 0; i < stringArr.length / 2; i++) {
    if (stringArr[i] !== stringArr[stringArr.length - 1 - i]) return false;
  }
  return true;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  const isInputString = Object.is(NaN, Number(input));

  if (!input) {
    return "Required field";
  } else if (isInputString || Number(input) === 0) {
    return "Must be a number besides 0";
  } else {
    return "";
  }
}
