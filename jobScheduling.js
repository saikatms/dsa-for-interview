/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
function jobScheduling(startTime, endTime, profit) {
  const jobs = [];
  const n = startTime.length;

  // Create jobs array with start time, end time, and profit
  for (let i = 0; i < n; i++) {
    jobs.push({
      startTime: startTime[i],
      endTime: endTime[i],
      profit: profit[i],
    });
  }

  // Sort jobs by end time
  jobs.sort((a, b) => a.endTime - b.endTime);

  // Initialize dp array to store maximum profit at each job
  const dp = new Array(n).fill(0);
  dp[0] = jobs[0].profit;

  for (let i = 1; i < n; i++) {
    // Find the latest job whose endTime is less than the current job's startTime
    let prevNonOverlap = -1;
    for (let j = i - 1; j >= 0; j--) {
      if (jobs[j].endTime <= jobs[i].startTime) {
        prevNonOverlap = j;
        break;
      }
    }

    // Calculate maximum profit at the current job by considering or excluding it
    const includeProfit =
      jobs[i].profit + (prevNonOverlap === -1 ? 0 : dp[prevNonOverlap]);
    const excludeProfit = dp[i - 1];
    dp[i] = Math.max(includeProfit, excludeProfit);
  }

  return dp[n - 1];
}

let startTime = [1, 2, 3, 3],
  endTime = [3, 4, 5, 6],
  profit = [50, 10, 40, 70];

console.log(jobScheduling(startTime, endTime, profit));
