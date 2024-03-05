function maxProductDifference(nums) {
  // Initialize four variables to store extreme values
  let firstMax = -Infinity,
    secondMax = -Infinity,
    firstMin = Infinity,
    secondMin = Infinity;

  // Iterate through the array to find the extreme values
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > firstMax) {
      secondMax = firstMax;
      firstMax = nums[i];
    } else if (nums[i] > secondMax) {
      secondMax = nums[i];
    }

    if (nums[i] < firstMin) {
      secondMin = firstMin;
      firstMin = nums[i];
    } else if (nums[i] < secondMin) {
      secondMin = nums[i];
    }
  }

  // Calculate the maximum product difference
  return firstMax * secondMax - firstMin * secondMin;
}

// Example usage:
const nums = [4, 2, 5, 9];
console.log(maxProductDifference(nums)); // Output will vary based on input
