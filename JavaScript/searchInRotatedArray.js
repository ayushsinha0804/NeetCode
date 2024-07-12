let arr=[3,4,5,1,2];
let target=4;
let flag=function(arr, target){
    let left=0;
    let right=arr.length-1;
    while(left<=right){
        const mid=Math.floor((left+right)/2);
        if(arr[mid]===target){
            return true;
        }
        if (arr[left] <= arr[mid]) {
            if (arr[left] <= target && target < arr[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (arr[mid] < target && target <= arr[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return false;
};
document.write(flag(arr, target));