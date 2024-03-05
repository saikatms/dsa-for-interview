/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let s1 = 0,
    s2 = s.length - 1;
  s = s.toLowerCase();
  while (s1 < s2) {
    let ch1 = s.charAt(s1),
      ch2 = s.charAt(s2);

    if (!((ch1 >= "a" && ch1 <= "z") || (ch1 >= "0" && ch1 <= "9"))) {
      s1++;
      continue;
    }
    if (!((ch2 >= "a" && ch2 <= "z") || (ch2 >= "0" && ch2 <= "9"))) {
      s2--;
      continue;
    }

    if (ch1 !== ch2) {
      return false;
    }
    s1++;
    s2--;
  }
  return true;
};

let s = "A man, a plan, a cadnal: Panama";
console.log(isPalindrome(s));
