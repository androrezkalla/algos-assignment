function findDuplicate(nums) {

  //Sort function to sort the array
  for(let i = 0; i < nums.length; i++){
      const value = nums[i]; //store the current val
      const correctIndex = nums[i]-1; //calc the correct index for the current value
      if(value !== nums[correctIndex]){ // check if the current value is not equal to correct index
        [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];  // swap 
    }
  }


  //This is now the sorted array, so we can check if the current element is equal to the next element. 
  //if it is, it means we found the duplicate
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i + 1]) {
        return nums[i];
      }
  }
}  

module.exports = findDuplicate;