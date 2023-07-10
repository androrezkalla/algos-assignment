const findMissingNum = require('./findMissingNum');

describe("findMissingNum(nums) should return the missing number in the array", () => {
  test("findMissingNum([1, 2, 4, 5]) should return 3", () => { 
    expect(findMissingNum([1, 2, 4, 5])).toBe(3);
  });

  test("findMissingNum([0,1]) should return 2", () => { 
    expect(findMissingNum([0,1])).toBe(2);
  });

  test("findMissingNum([3,0,1]) should return 2", () => { 
    expect(findMissingNum([3,0,1])).toBe(2);
  });
});
