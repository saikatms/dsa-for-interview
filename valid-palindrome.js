/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let l = 0;
  let r = s.length - 1;
  s = s.toLowerCase();

  while (l <= r) {
    let strL = s[l],
      strR = s[r];
    if (!((strL >= "a" && strL <= "z") || (strL >= "0" && strL <= "9"))) {
      ++l;
    } else if (
      !((strR >= "a" && strR <= "z") || (strR >= "0" && strR <= "9"))
    ) {
      r--;
    } else if (strL == strR) {
      l++;
      r--;
    } else {
      return false;
    }
  }
  return true;
};
let s = "0P";
console.log(isPalindrome(s));
