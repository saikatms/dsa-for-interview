/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let ans = "",
    temp = "";
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    if (ch == " ") {
      if (temp !== "") {
        ans = temp + " " + ans;
      }
      temp = "";
    } else {
      temp += ch;
    }
  }
  if (temp !== "") {
    ans = temp + " " + ans;
  }
  if (ans.length > 0 && ans[ans.length - 1] === " ") {
    ans = ans.substring(0, ans.length - 1);
  }
  return ans;
};
let s = " the sky is blue ";
console.log(reverseWords(s));
