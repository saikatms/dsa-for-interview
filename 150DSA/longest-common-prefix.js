/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  strs = strs.sort();
  let res = "";
  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0][i] === strs[strs.length - 1][i]) {
      res += strs[0][i];
    } else {
      break;
    }
  }
  return res;
};

let strs = ["flower", "flow", "flight"];

console.log(longestCommonPrefix(strs));
