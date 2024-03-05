/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  let result = [],
    i = 0,
    num = 1;
  while (num <= n) {
    if (i == target.length) {
      return result;
    } else if (target[i] == num) {
      result.push("Push");
      i++;
    } else {
      result.push("Push");
      result.push("Pop");
    }
    num++;
  }
  return result;
};

let target = [1, 3],
  n = 3;
console.log(buildArray(target, n));
