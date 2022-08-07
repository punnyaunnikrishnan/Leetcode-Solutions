/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);

  const n = nums.length;
  let result = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < n - 2; i++) {
    let lo = i + 1,
      hi = n - 1;
    while (lo < hi) {
      const sum = nums[lo] + nums[hi] + nums[i];
      if (sum < target) lo++;
      else if (sum > target) hi--;
      else return target;

      if (Math.abs(target - sum) < Math.abs(target - result)) result = sum;
    }
  }
  return result;
};
