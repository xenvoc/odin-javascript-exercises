const reverseString = function(str) {
    rstr = '';
    for (let i = str.length-1; i >= 0; i--) {
        rstr += str[i];
    }
    return rstr;

};

// Do not edit below this line
module.exports = reverseString;
