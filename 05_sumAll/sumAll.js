const sumAll = function(min, max) {
    if (min < 0 || max < 0 || typeof min !== 'number' || typeof max !== 'number') return 'ERROR';
    if (max < min) {
    max = max + min;
    min = max - min;
    max = max - min;
    } 
    rsum = 0;
    for (let i = min; i <= max; i++) {
        rsum += i;
    }
    return rsum;
};

// Do not edit below this line
module.exports = sumAll;