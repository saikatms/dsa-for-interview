/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
  let ans = 0;
  for (let index = 1; index < points.length; index++) {
    let diffx = Math.abs(points[index][0] - points[index - 1][0]);
    let diffy = Math.abs(points[index][1] - points[index - 1][1]);
    // console.log(diffx, diffy);
    ans += Math.max(diffx, diffy);
  }
  return ans;
};

let points = [
  [1, 1],
  [3, 4],
  [-1, 0],
];

console.log(minTimeToVisitAllPoints(points));
