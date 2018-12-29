// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


//  memoize solution
function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

module.exports = fib;
//  original solution by me
// function fib(n) {
//   f = [0,1];
//     for(i=2; i<=n; i++){
//       f[i] = f[i-1]+f[i-2];
//     }return f[n];
//   }

//  recursive by using the above
//   function fib(n, f = [0,1], i=2) {
//   if (i<=n){
//   f[i] = f[i-1]+f[i-2];
//   i++;
//   fib(n,f,i);
//   }
//   return f[n];
// }

//  more recursive solution but very delicate with imangination but more resource
// function fib(n){
//   if(n<2) {
//     return n;
//   }
//   return fib(n-1)+fib(n-2);
// }
// 
// module.exports = fib;
