const fibonacci = function(n) {
  let fib = [0, 1];
  if (n < 0) {
    return "OOPS";
  }
  for (let i = 0; i < n-1; i++) {
    fib.push(fib[i]+fib[i+1]);
  }
  return fib[n];
};

// Do not edit below this line
module.exports = fibonacci;
