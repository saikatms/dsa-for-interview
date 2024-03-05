/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function (hours, target) {
  let count = 0;
  for (let index = 0; index < hours.length; index++) {
    if (hours[index] >= target) {
      count++;
    }
  }
  return count;
};

let hours = [0, 1, 2, 3, 4],
  target = 2;

console.log(numberOfEmployeesWhoMetTarget(hours, target));
