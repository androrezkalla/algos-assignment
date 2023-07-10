const twoSum = require('./twoSum');

describe("twoSum(numbers, target) should return the indices of the pair that sum up to the target", () => {
  test("twoSum([2, 7, 11, 15], 9) should return [1, 2]", () => { 
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
  });

  test("twoSum([1, 2, 3, 4, 5], 7) should return [2, 5]", () => { 
    expect(twoSum([1, 2, 3, 4, 5], 7)).toEqual([2, 5]);
  });

  test("twoSum([-1,0], -1) should return [1,2]", () => { 
    expect(twoSum([-1,0], -1)).toEqual([1,2]);
  });
});
