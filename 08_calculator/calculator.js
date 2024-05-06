const add = function (a, b) {
  return a + b
};

const subtract = function (a, b) {
  return a - b
};

const sum = function (array) {
  if (array.length == 0) return 0
  return array.reduce((accumulator, current) => {
    return accumulator + current
  }, 0)
};

const multiply = function (array) {
  return array.reduce((accumulator, current) => {
    return accumulator * current
  })
};

const power = function (a, power) {
  return a ** power
};

const factorial = function (num) {
  value = null
  if (num === 0) value = 1; else {
    for (let i = num; i > 0; i--) {
      if (i === num) {
        value = i;
      } else {
        value *= i;
      }

    }
  }
  return value
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
