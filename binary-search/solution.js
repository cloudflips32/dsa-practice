function BinarySearch(nums,target){
    let i = 0;
    let r = nums.length;

    while(i<=r){
        let mid = Math.floor((i+r)/2);
        if(nums[mid] == target) return mid;
        else if(nums[mid] < target){
            i = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return -1;  
};

console.log(BinarySearch([-1,0,3,5,9,12],9)); // 9

console.log(BinarySearch([-1,0,3,5,9,12],2)); // 2
