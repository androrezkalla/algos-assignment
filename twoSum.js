function twoSum(numbers, target) {

    //using the pointers approach for the twoSum, and initializing the pointers
    let left = 0;
    let right = numbers.length - 1;

    //looping from the left and right until the pointers meet
    while (left < right) {
        const currentSum = numbers[left] + numbers[right]; // calculate the current sum at the pointers 

        //if the current sum is the target, it will return the pair of values
        if (currentSum === target) {
            return [left + 1, right + 1];
        } else if (currentSum > target) { // If the sum is greater than the target, move the right pointer towards the left
            right--;
        } else { // otherwise move the left pointer towards the right
            left++;
        }
    }

    return [];
}

module.exports = twoSum;
