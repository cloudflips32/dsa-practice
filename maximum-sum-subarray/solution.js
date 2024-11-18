class Solution {
  /**
  * @param {number[]} nums
  * @return {number}
  */
  maxSumSubarray(nums) {

                         // My Initial Answer

      // -Infinity, smaller than zero, set to maxSum due to nums array containing negative numbers.
      // let maxSum = -Infinity;
      // initial for-loop set for i,
      // for(let i = 0; i < nums.length; i++){
      // our sum, which will be compared to maxSum, initialized at 0.
      //     let sum = 0;
      // second for-loop iterates through our subarray, which is one index value ahead of the first foor-loop.
      //     for(let j = i + 1; j <= nums.length-1; j++){
      //       // each loop adds the current index value to our sum.
      //         sum += nums[j];
      //         // if our sum is greater than maxSum
      //         if(sum > maxSum){
      //           // maxSum becomes the current sum.
      //             maxSum = sum;
      //         }
      //     }
      // }
      // Problem outputs maxSum, which is the maximum sum of our subarray.
      // return maxSum;

                           /* OPTIMIZED ANSWER */

      // -Infinity, smaller than zero, set to maxSum due to nums array containing negative numbers.
      let maxSum = -Infinity;
      // initial for-loop set for i,
      for(let i = 0; i < nums.length; i++){
      // our sum, which will be compared to maxSum, initialized at 0.
          let sum = 0;
      // second for-loop iterates through our subarray, which is one index value ahead of the first foor-loop.
          for(let j = i + 1; j <= nums.length-1; j++){
            // each loop adds the current index value to our sum.
              sum += nums[j];
              // Using the max method eliminates the need for the if statement in our initial problem.
              maxSum = Math.max(maxSum,sum);
          }
      }
    //  Problem outputs maxSum, which is the maximum sum of our subarray.
      return maxSum;
  }
}