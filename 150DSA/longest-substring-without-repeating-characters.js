/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let start = 0,
    end = 0,
    max_length = 0,
    substring = [];
  while (end < s.length) {
    if (!substring.includes(s[end])) {
      substring.push(s[end]);
      end++;
      max_length = Math.max(max_length, substring.length);
    } else {
      let index = substring.indexOf(s.charAt(start));
      if (index !== -1) {
        substring.splice(index, 1);
      }
      start++;
    }
  }

  return max_length;
};
let s = "pwwkew";

console.log(lengthOfLongestSubstring(s));
