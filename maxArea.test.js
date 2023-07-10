const maxArea = require("./maxArea");

describe("test cases from the assignment", () => {
  test("maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]) should return 49", () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
    expect(maxArea([4, 3, 2, 1, 4])).toBe(16);
    expect(maxArea([1, 2, 1])).toBe(2);
  });

  test("maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]) should return 49", () => { 
    expect(maxArea([4, 3, 2, 1, 4])).toBe(16);
  });

  test("maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]) should return 49", () => { 
    expect(maxArea([4, 3, 2, 1, 4])).toBe(16);
  });

});