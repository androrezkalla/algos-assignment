function maxArea(heights) {
    
    //Did this question previously in assignment 3 !!!

    //define variables and pointers 
    let maxArea = 0;
    let left = 0;
    let right = heights.length - 1;
    
    //loop until the pointers meet in the middle 
    while (left < right) {
      const width = right - left;  // calc the width between the pointers
      const minHeight = Math.min(heights[left], heights[right]); //calc the min height 
      const area = width * minHeight; // find the area from the aquired dimensiosn above, which is W * H 
      maxArea = Math.max(maxArea, area); // updates the max area found while looping thru the array 


        // this will move the left and right pointers as i progress thru the array 
      if (heights[left] < heights[right]) {
        left++;
      } else {
        right--;
      }
    }

    //return max area
    return maxArea;
  }
  
  module.exports = maxArea;
  