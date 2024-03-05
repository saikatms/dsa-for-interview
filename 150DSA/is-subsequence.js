/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let i = 0,
    j = 0;
  while (i <= s.length && j <= t.length) {
    if (s[i] == t[j]) {
      i++;
    }
    j++;
    if (i == s.length) {
      return true;
    }
  }
  return false;
};
let s = "absc",
  t = "ahbgdc";
console.log(isSubsequence(s, t));

let sPointer = 0;

// for (let i = 0; i < t.length; i++) {
//   if (t[i] === s[sPointer]) {
//     sPointer++;
//   }
// }

// return sPointer === s.length;
