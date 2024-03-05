/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let mapping = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  let rom = "";
  for (let i = 0; i < mapping.length; i++) {
    let div = Math.floor(num / mapping[i][0]);
    if (div > 0) {
      while (div > 0) {
        rom += mapping[i][1];
        div--;
      }
    }
    num = num % mapping[i][0];
  }
  return rom;
};

let num = 1994;
console.log(intToRoman(num));
