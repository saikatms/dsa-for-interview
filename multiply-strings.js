/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 == "0" || num2 == "0") {
    return 0;
  }
  let m = num1.length,
    n = num2.length,
    res = new Array(m + n).fill(0);

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const pos1 = i + j,
        pos2 = i + j + 1;

      console.log(i, j);
    }
  }
};

let num1 = "123456789",
  num2 = "987654321";

console.log(multiply(num1, num2));
