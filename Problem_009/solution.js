/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  var fakeInit = init;
  return {
    increment: () => {
      init++;
      return init;
    },
    decrement: () => {
      init--;
      return init;
    },
    reset: () => {
      init = fakeInit;
      return init;
    },
  };
};

module.exports = { createCounter };
