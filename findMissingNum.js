function findMissingNum(nums){

    // using the same sorting function as the duplicate question, comparing the value to the correct index then swapping to sort it
    for(let i = 0; i < nums.length; i++){
        const value = nums[i];
        const correctIndex = nums[i]-1;
        if(value !== nums[correctIndex]){
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];//swap
        }
    }

    //since this is now sorted, we can check if the current element is not equal to the next element which should be (i+1).
    for(let i = 0; i< nums.length; i++){
        if(nums[i] !== i+1 ){
            return i + 1 ;   //if a missing number is found, return the missing number.
        }
    }

}

module.exports = findMissingNum;
