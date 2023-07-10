const findDuplicate = require('./findDuplicate');

describe("findDuplicate(nums) should return the duplicate in the array", () => {
  test("findDuplicate([7, 3, 4, 3, 5]) should return 3", () => { 
    expect(findDuplicate([7, 3, 4, 3, 5])).toBe(3);
  });

  test("findDuplicate([1]) should return []", () => { 
    expect(findDuplicate([1])).toBe();
  });

  test("findDuplicate([4,1,3,4,2]) should return 4", () => { 
    expect(findDuplicate([4,1,3,4,2])).toBe(4);
  });

});
