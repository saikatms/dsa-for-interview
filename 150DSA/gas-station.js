/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let totalDiff = 0,
    n = gas.length,
    fuel = 0,
    index = 0;
  for (let i = 0; i < n; i++) {
    let diff = gas[i] - cost[i];
    totalDiff = totalDiff + diff;
    fuel = fuel + diff;
    if (fuel < 0) {
      index = i + 1;
      fuel = 0;
    }
  }
  return totalDiff < 0 ? -1 : index;
};

let gas = [1, 2, 3, 4, 5],
  cost = [3, 4, 5, 1, 2];
console.log(canCompleteCircuit(gas, cost));
