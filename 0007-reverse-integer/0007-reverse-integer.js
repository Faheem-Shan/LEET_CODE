/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev = parseInt(Math.abs(x).toString().split('').reverse().join(''));
    if (rev > 2**31 -1) return 0;
    return x < 0 ? -rev :rev;
};