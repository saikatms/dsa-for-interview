/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
  let res = 0;
  while (n > 1) {
    console.log("N", n);
    if (n % 2 == 0) {
      res = res + n / 2;
      console.log(res);
      n = n / 2;
    } else {
      res = res + (n - 1) / 2;
      console.log(res);

      n = (n - 1) / 2 + 1;
    }
  }
  return res;
};
console.log(numberOfMatches(7));
