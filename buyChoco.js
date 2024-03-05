/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
  let first = Number.MAX_VALUE,
    second = Number.MAX_VALUE;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < first) {
      first = prices[i];
    }
  }
  /* find the second smallest element */
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < second && prices[i] > first) {
      second = prices[i];
    }
  }
  // console.log(firstMin, secondMin);
  if (money >= first + second) {
    return money - (first + second);
  } else {
    return money;
  }
};
let prices = [69, 91, 78, 19, 40, 13],
  money = 94;
console.log(buyChoco(prices, money));
