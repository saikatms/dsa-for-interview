/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let words = {};
  for (const iterator of magazine) {
    if (words.hasOwnProperty(iterator)) {
      words[iterator] = words[iterator] + 1;
    } else {
      words[iterator] = 1;
    }
  }
  for (const iterator of ransomNote) {
    if (words.hasOwnProperty(iterator) && words[iterator] > 0) {
      words[iterator] = words[iterator] - 1;
    } else {
      return false;
    }
  }
  return true;
};
let ransomNote = "ac",
  magazine = "aab";

console.log(canConstruct(ransomNote, magazine));
