let arr=[1,2,3,4,5,6,7,8,9];
let target=4;
let flag=function(arr,target){
    let left=0;
    let right=arr.length-1;
    let mid=0;
    while(left<=right){
        mid=Math.floor((left+right)/2);
        if(arr[mid]===target){
            return true;
        }
        else if(arr[mid]>target){
            right=mid-1;
        }
        else{
            left=mid+1;
        }
    }
    return false;
}
document.write(flag(arr, target));