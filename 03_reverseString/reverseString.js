const reverseString = function (string) {
    let output = "";
    for (i = string.length - 1; i >= 0; i--) {
        output += string[i];
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
