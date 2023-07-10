function smallestMissing(nums) {
  const n = nums.length;
  // modified my old sort function so that the index are sorted by (i, i +1) 
  // this sort makes it easier to detect the smallest positive number later on in the code
  for (let i = 0; i < n; i++) {
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      const correctIndex = nums[i] - 1;
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]]; // SWAP
    }
  }

  // this will loop through the array to find the first index where the element is not equal to i+1, 
  // which would be the smallest missing positive integer in any case
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  // the smallest missing positive integer is n+1.
  return n + 1;
}

module.exports = smallestMissing;