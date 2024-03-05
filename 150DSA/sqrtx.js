/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let l = 1,
    r = x,
    res;
  while (l <= r) {
    let mid = parseInt(l + (r - l) / 2);
    if (mid ** 2 < x) {
      l = mid + 1;
      res = mid;
    } else if (mid ** 2 > x) {
      r = mid - 1;
    } else {
      return mid;
    }
  }
  return res;
};

let x = 8;
console.log(mySqrt(x));
