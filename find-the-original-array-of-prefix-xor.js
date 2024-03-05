/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function (pref) {
  let res = [];
  // let prev = 0;
  for (let index = 0; index < pref.length; index++) {
    // if (index == 0) {
    //   res[index] = pref[index];
    //   prev = pref[index];
    // } else {
    res[index] = pref[index] ^ pref[index - 1];
    // prev = prev ^ res[index];
    // }
  }
  return res;
};

let pref = [5, 2, 0, 3, 1];
console.log(findArray(pref));
pref = [13, 12];
console.log(pref[0], pref[-1]);
console.log(pref[0] ^ pref[-1]);
