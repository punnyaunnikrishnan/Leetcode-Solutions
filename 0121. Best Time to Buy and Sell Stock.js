/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length < 2) return 0;

  let last = 0,
    max = 0;

  for (let i = 1; i < prices.length; i++) {
    last = Math.max(0, last + prices[i] - prices[i - 1]);
    max = Math.max(last, max);
  }

  return max;
};
