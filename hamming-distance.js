/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let count = 0;
  for (let index = 0; index < 32; index++) {
    if (((x >> index) & 1) !== ((y >> index) & 1)) {
      count++;
    }
  }
  return count;
};
console.log(hammingDistance(4, 2));
