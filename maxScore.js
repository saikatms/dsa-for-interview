/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let zero = 0,
    one = 0;
  s[0] == "0" ? zero++ : null;
  for (let index = 1; index < s.length; index++) {
    if (s[index] == "1") {
      one++;
    }
  }
  let max = zero + one;
  for (let index = 1; index < s.length; index++) {
    if (s[index] == "0") {
      zero++;
    } else if (s[index] == "1") {
      one--;
    }
    max = Math.max(max, one + zero);
  }
  return max;
};

console.log(maxScore("00111"));
