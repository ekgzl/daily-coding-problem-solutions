/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const val = Boolean(fn(arr[i], i));
    if (val) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};

module.exports = filter;
