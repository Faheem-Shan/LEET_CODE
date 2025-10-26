/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sw = s.split("").sort().join("")
    let tw = t.split("").sort().join("")
    if(sw==tw){
        return true
    }
    else{
        return false
    }
};