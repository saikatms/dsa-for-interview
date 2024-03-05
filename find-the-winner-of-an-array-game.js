/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function (arr, k) {
  if (k === 1) {
    return Math.max(arr[0], arr[1]);
  }
  if (k >= arr.length) {
    return Math.max(...arr);
  }

  let count = 0;
  let leftInd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[leftInd] > arr[i + 1]) {
      arr.push(arr.splice(i + 1, 1)[0]);
      count++;
    } else if (arr[leftInd] < arr[i + 1]) {
      leftInd = leftInd + 1;
      arr.push(arr.splice(i, 1)[0]);
      count++;
    }
    if (count == k) {
      return arr[leftInd];
    }
  }
};

let arr = [1, 9, 8, 2, 3, 7, 6, 4, 5],
  k = 7;

// arr.push(arr.splice(2, 1)[0]);
// console.log(arr);
console.log(getWinner(arr, k));
