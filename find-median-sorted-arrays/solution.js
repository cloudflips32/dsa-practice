/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2){
  let merged = nums1.concat(nums2);
  merged.sort((a,b) => a-b);
    
  let mid = Math.floor(merged.length / 2);
  if (merged.length % 2 === 0){
      return console.log((merged[mid-1] + merged[mid]) / 2);
  } else {
      return console.log(merged[mid]);
  }
};

findMedianSortedArrays([1,3],[2]);
findMedianSortedArrays([1,2],[3,4]);
findMedianSortedArrays([1,2,3,4,5],[6,7,8,9,10,11,12,13,14,15,16,17]);