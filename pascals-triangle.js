/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows == 0) {
    return [];
  } else if (numRows == 1) {
    return [[1]];
  }
  let res = [];
  for (let i = 1; i <= numRows; i++) {
    let arr = [];
    for (let col = 0; col < i; col++) {
      if (col == 0 || col == i - 1) {
        arr.push(1);
      } else {
        arr.push(res[i - 2][col - 1] + res[i - 2][col]);
      }
    }
    res.push(arr);
  }
  return res;
};

let numRows = 5;

console.log(generate(numRows));
