/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function (buckets, minutesToDie, minutesToTest) {
  if (buckets == 1) {
    return 0;
  }

  let k = minutesToTest / minutesToDie + 1;
  let pigs = 1;
  while (k ** pigs < buckets) {
    pigs++;
  }
  return pigs;
};

let buckets = 4,
  minutesToDie = 15,
  minutesToTest = 30;

console.log(poorPigs(buckets, minutesToDie, minutesToTest));
