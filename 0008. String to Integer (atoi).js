/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const n = s.length;

  let i = 0,
    result = 0;
  while (s[i] === " ") i++;

  let sign = s[i] === "-" ? -1 : 1;
  if (s[i] === "-" || s[i] === "+") i++;

  while (i < n) {
    const m = s[i] - 0;
    if (Number.isNaN(m) || s[i] === " ") break;
    result = result * 10 + m;
    i++;
  }

  result *= sign;

  if (result >= 2147483647) return 2147483647;
  if (result <= -2147483648) return -2147483648;
  return result;
};
