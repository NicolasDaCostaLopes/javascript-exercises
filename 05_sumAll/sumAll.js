const sumAll = function (start, end) {
    if (typeof start != "number" || typeof end != "number") {
        return "ERROR";
    } else if (start < 0 || end < 0) {
        return "ERROR";
    } else if (start > end) {
        let temp = end;
        end = start;
        start = temp;
    }
    let output = 0;
    for (i = start; i <= end; i++) {
        output += i;
    }
    return output;
};

// Do not edit below this line
module.exports = sumAll;
