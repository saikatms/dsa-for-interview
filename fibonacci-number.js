/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n == 0 || n == 1) {
    return n;
  }
  let first = 0,
    second = 1;
  let next;
  for (let index = 0; index < n - 1; index++) {
    next = first + second;
    first = second;
    second = next;
  }
  return next;
};
let n = 5;
console.log(fib(n));
