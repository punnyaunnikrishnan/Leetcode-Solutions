/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const isOverflow = (x) => x > 0x7fffffff || -x > 0x7fffffff;
  if (isOverflow(x)) return 0;

  let y = Math.abs(x),
    result = 0;
  while (y !== 0) {
    result = result * 10 + (y % 10);
    y = Math.floor(y / 10);
  }

  result *= x < 0 ? -1 : 1;
  return isOverflow(result) ? 0 : result;
};
