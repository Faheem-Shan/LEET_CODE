/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let newStr = digits.join("");
    let str = BigInt(newStr);
    str++;
    let num= str.toString().split('').map(Number);
    return num;
};