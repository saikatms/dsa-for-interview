/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
  const countOccurrences = nums.reduce((acc, curr) => {
    if (curr in acc) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  const sortableArray = Object.entries(countOccurrences);

  // Sort the array based on the values (index 1 of each pair)
  sortableArray.sort((a, b) => b[1] - a[1]);

  let res = new Array(sortableArray[0][1]);
  for (let i = 0; i < res.length; i++) {
    res[i] = [];
  }

  for (let index = 0; index < sortableArray.length; index++) {
    let j = sortableArray[index][1],
      k = 0; // reset k to 0 for each new element
    while (j > 0) {
      res[k].push(parseInt(sortableArray[index][0])); // Convert string to integer
      k++; //= (k + 1) % res.length; // Cycle through rows
      j--;
    }
  }
  return res;
};
console.log(findMatrix([1, 3, 4, 1, 2, 3, 1]));
