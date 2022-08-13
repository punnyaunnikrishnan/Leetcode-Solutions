/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let size = nums.length,
    result = 0;

  if (!size) {
    return null;
  }

  for (let i = 0; i < size; i++) {
    result ^= nums[i];
  }

  return result;
};
