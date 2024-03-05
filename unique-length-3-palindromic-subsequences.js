/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
  let res = 0;
  const uniq = new Set(s);

  for (const char of uniq) {
    const start = s.indexOf(char);
    const end = s.lastIndexOf(char);

    if (start < end) {
      console.log(new Set(s.slice(start + 1, end)));
      res += new Set(s.slice(start + 1, end)).size;
      console.log(res);
    }
  }
  return res;
};

let s = "ababcad";
console.log(countPalindromicSubsequence(s));
