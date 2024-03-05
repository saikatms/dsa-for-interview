/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  return arr.sort((a, b) => {
    let countA = a
      .toString(2)
      .split("")
      .filter((bit) => bit === "1").length;
    let countB = b
      .toString(2)
      .split("")
      .filter((bit) => bit === "1").length;
    return countA - countB || a - b;
  });
};

let arr = [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1];

console.log(sortByBits(arr));
