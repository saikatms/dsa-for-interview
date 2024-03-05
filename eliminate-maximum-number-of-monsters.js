/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function (dist, speed) {
  let dist1 = dist.map((n, i) => n / speed[i]);
  dist1.sort();
  for (let i = 0; i < dist1.length; i++) {
    if (dist1[i] <= i) {
      return i;
    }
  }
  return dist1.length;
};
let dist = [1, 3, 4],
  speed = [1, 1, 1];

console.log(eliminateMaximum(dist, speed));
