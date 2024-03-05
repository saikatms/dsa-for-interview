/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
  return points
    .sort((a, b) => a[0] - b[0])
    .reduce((max, curr, index, array) => {
      if (index == 0) {
        return max;
      }
      const diff = curr[0] - array[index - 1][0];
      return diff > max ? diff : max;
    }, 0);
  console.log(xIndixs);
};

let points = [
  [8, 7],
  [9, 9],
  [7, 4],
  [9, 7],
];

console.log(maxWidthOfVerticalArea(points));
