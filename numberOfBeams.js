/**
 * @param {string[]} bank
 * @return {number}
 */
function countOccurrences(mainStr, subStr) {
  if (!subStr.length) return 0;

  let count = 0;
  let position = mainStr.indexOf(subStr);

  while (position !== -1) {
    count++;
    position = mainStr.indexOf(subStr, position + subStr.length);
  }
  return count;
}

var numberOfBeams = function (bank) {
  let res = 0;
  let prevCount = 0;

  for (let index = 0; index < bank.length; index++) {
    const curr = countOccurrences(bank[index], "1");

    if (curr > 0) {
      if (prevCount > 0) {
        res += curr * prevCount;
      }
      prevCount = curr;
    }
  }

  return res;
};

let bank = ["011001", "000000", "010100", "001000"];
console.log(numberOfBeams(bank));
