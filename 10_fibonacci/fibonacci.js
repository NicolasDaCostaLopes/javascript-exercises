const fibonacci = function (wantedIndex) {
    wantedIndex = +wantedIndex
    if (wantedIndex < 0) return "OOPS"
    let fib = [0, 1]
    for (let i = 2; i - 1 < wantedIndex; i++) {
        fib.push(fib[i - 2] + fib[i - 1]);
    }
    return fib[wantedIndex];
};

// Do not edit below this line
module.exports = fibonacci;
