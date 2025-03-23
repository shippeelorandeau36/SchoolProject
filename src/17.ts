function findMaxSumSubarray(nums: number[]): number {
  if (!nums || nums.length === 0) return 0;

  let maxSoFar = nums[0];
  let currentMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    // If adding this number to the maximum sum subarray results in a new maximum, then add it
    if ((maxSoFar + num) > num) maxSoFar += num;
    else maxSoFar = num;

    // If adding this number to the current maximum result is negative, move to the next element and reset currentMax for the next iteration
    if (num < 0 && i >= 1) {
      if ((maxCurrent + nums[i - 1]) > nums[i - 1] * maxSoFar)
        continue;
      else {
        maxCurrent = nums[i - 1];
        nums[i] = num;
      }
    } else {
      // If adding this number to the current maximum result is not negative, update currentMax and reset maxSoFar
      if ((maxCurrent + nums[i]) > nums[i] * maxSoFar) {
        maxCurrent = nums[i];
        maxSoFar = nums[i];
      }
    }
  }

  return maxSoFar;
}
