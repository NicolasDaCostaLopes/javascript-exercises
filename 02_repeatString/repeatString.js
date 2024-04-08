const repeatString = function (string, num) {
    let output;
    if (num >= 0) {
        output = string.repeat(num);
    } else output = "ERROR";
    return output;
};

// Do not edit below this line
module.exports = repeatString;
