let arr=[3,4,5,0,2];
let minimum=function(nums){
    let left=0;
    let right=arr.length-1;
    if(nums[left]<nums[right]){
        return nums[left];
    }
    while(left<right){
        const mid=Math.floor((right+left)/2);
        if(nums[mid]>nums[right]){
            left=mid+1;
        }
        else{
            right=mid;
        }
    }
    return nums[left];
};
document.write(minimum(arr));