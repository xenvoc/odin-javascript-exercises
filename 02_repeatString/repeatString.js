const repeatString = function(str, num) {
    if (num < 0) return 'ERROR';
    rstr = '';
    for (let i = 0; i < num; i++) rstr += str;
    return rstr;

};

// Do not edit below this line
module.exports = repeatString;
