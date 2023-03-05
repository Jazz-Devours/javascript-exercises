const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let sum = 0;
	for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let total;
	for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      total = arr[i];
    }
    else {
      total *= arr[i];
    }
  }
  return total;
};

const power = function(a, b) {
	let total;
  for (let i = 0; i < b; i++) {
    if (i == 0) {
      total = a;
    }
    else {
      total *= a;
    }
  }
  return total;
};

const factorial = function(val) {
	let total = 1;
  if (val < 0) return undefined;
  if (val < 2) return total;
  else {
    for (let i = val; i > 1; i--) {
      total *= i;
    }
  }
  return total;
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
