/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let res = "";
  for (let i = 0; i < numRows; i++) {
    let increment = 2 * (numRows - 1);
    for (let j = i; j < s.length; j = j + increment) {
      res += s[j];
      if (i > 0 && i < numRows - 1 && j + increment - 2 * i < s.length) {
        res += s[j + increment - 2 * i];
      }
    }
  }
  return res;
};
let s = "PAYPALISHIRING",
  numRows = 3;

console.log(convert(s, numRows));
