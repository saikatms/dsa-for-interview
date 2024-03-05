/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  let n = citations.length;
  let freq = new Array(citations.length + 1).fill(0);
  for (const i of citations) {
    if (i > n) {
      freq[n]++;
    } else {
      freq[i]++;
    }
  }
  console.log(freq);
  let count = 0;
  for (let j = citations.length; j >= 0; j--) {
    count = count + freq[j];
    if (count >= j) {
      return j;
    }
  }
  return 0;
};
let citations = [1];
console.log(hIndex(citations));
