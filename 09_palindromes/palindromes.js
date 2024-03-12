const palindromes = function (str) {
    let plainStr =  str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    for (let i = 0; i < Math.floor(plainStr.length/2); i++) {
        if (plainStr[i] !== plainStr[plainStr.length - 1 - i]) return false;
    }
    return true;
};

console.log(palindromes('ZZZZ car, a man, a maracaz.'));
// Do not edit below this line
module.exports = palindromes;
