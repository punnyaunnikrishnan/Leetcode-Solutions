/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const n = nums.length,
    result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n - 2; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let lo = i + 1,
        hi = n - 1;
      while (lo < hi) {
        const sum = nums[i] + nums[lo] + nums[hi];
        if (sum < 0) lo++;
        else if (sum > 0) hi--;
        else {
          result.push([nums[i], nums[lo], nums[hi]]);
          while (++lo < hi && nums[lo] === nums[lo - 1]);
          while (lo < --hi && nums[hi] === nums[hi + 1]);
        }
      }
    }
  }
  return result;
};
