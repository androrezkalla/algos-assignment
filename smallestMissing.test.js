const smallestMissing = require('./smallestMissing');

describe("smallestMissing(nums) should return the smallest missing positive integer in the array", () => {
  test("smallestMissing([1, 2, 0]) should return 3", () => { 
    expect(smallestMissing([1, 2, 0])).toBe(3);
  });

  test("smallestMissing([3,4,-1,1]) should return 2", () => { 
    expect(smallestMissing([3,4,-1,1])).toBe(2);
  });

  test("smallestMissing([7,8,9,11,12]) should return 1", () => { 
    expect(smallestMissing([7,8,9,11,12])).toBe(1);
  });
});
