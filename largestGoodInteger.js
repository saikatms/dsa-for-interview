/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
  let largest = 0;

  for (let index = 0; index < num.length; index++) {
    const element = num.length > 3 ? num.slice(index, index + 3) : num;
    if (element[0] == element[1] && element[1] == element[2]) {
      if (parseInt(element) >= parseInt(largest)) {
        largest = element;
      }
    }
  }
  return largest ? largest : "";
};
let num = "6777133339";
console.log(largestGoodInteger(num));
