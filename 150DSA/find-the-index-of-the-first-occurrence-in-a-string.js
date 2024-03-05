/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (haystack[i] == needle[0]) {
      let j = i; //haystack
      let k = 0; //needle
      while (
        k < needle.length &&
        j < haystack.length &&
        haystack[j] == needle[k]
      ) {
        j++;
        k++;
        if (k == needle.length) {
          return i;
        }
      }
    }
  }
  return -1;
};

let haystack = "sadbutsad",
  needle = "but";
console.log(strStr(haystack, needle));
