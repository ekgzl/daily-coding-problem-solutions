/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  const hi = Promise.all([promise1, promise2]).then(([v1, v2]) => {
    return v1 + v2;
  });
  return hi;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

module.exports = addTwoPromises;
