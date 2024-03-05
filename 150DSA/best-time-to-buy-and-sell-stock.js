/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buyPrice = prices[0],
    maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (buyPrice > prices[i]) {
      buyPrice = prices[i];
    } else {
      let currProfit = prices[i] - buyPrice;
      maxProfit = Math.max(currProfit, maxProfit);
    }
  }
  return maxProfit;
};

let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
