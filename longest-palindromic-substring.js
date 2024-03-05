/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (str) {
  let len = str.length;

  let table = new Array(len);
  for (let i = 0; i < len; i++) {
    table[i] = new Array(len);
  }

  let maxLength = 1;

  for (let i = 0; i < len; i++) {
    table[i][i] = true;
  }
  // Check for sub-string of length 2.
  let start = 0;

  for (let i = 0; i < len; i++) {
    if (str[i] == str[i + 1]) {
      table[i][i + 1] = true;
      start = i;
      maxLength = 2;
    }
  }

  for (let k = 3; k <= len; k++) {
    for (let i = 0; i < len - k + 1; i++) {
      let j = i + k - 1;

      if (table[i + 1][j - 1] && str[i] == str[j]) {
        table[i][j] = true;

        if (k > maxLength) {
          start = i;
          maxLength = k;
        }
      }
    }
  }
  return printSubStr(str, start, start + maxLength - 1);
};
function printSubStr(str, low, high) {
  console.log(str.substring(low, high + 1));
}

let s = "ccc";

console.log(longestPalindrome(s));
