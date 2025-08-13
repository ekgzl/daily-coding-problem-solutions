/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) { // buna da high order function deniyor çünkü fonksiyon parametre almış/fonksiyon return etmiş
  let bool = false; // Closure: bunu alt fonksiyon hatırlıyor.
  return function (...args) {
    if (!bool) {
      bool = true; // üst func değerini değiştirebiliyor.
      return fn(...args);
    } else {
      return undefined;
    }
  };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

module.exports = once;
