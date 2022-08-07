/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let result = 0,
    i = 0,
    j = height.length - 1;
  while (i < j) {
    const min = Math.min(height[i], height[j]);
    result = Math.max(result, min * (j - i));
    if (min === height[j]) j--;
    else i++;
  }
  return result;
};
