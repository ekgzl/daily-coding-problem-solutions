/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: (testVal) => {
            if (testVal === val) return true;
            throw new Error("Not Equal");
        },
        notToBe: (testVal) => {
            if (testVal !== val) return true;
            throw new Error("Equal");
        }
    }
};

module.exports = { expect };