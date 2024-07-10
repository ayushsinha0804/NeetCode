let arr=[2,7,11,19];
let target=9;
let flag=function(arr, target){
    let lpointer=0;
    let rpointer=arr.length-1;
    while(lpointer<=rpointer){
        if(arr[lpointer]+arr[rpointer]==target){
            return true;
        }
        else if(arr[lpointer]+arr[rpointer]>target){
            rpointer--;
        }
        else{
            lpointer++;
        }
    }
    return false;
};
document.write(flag(arr,target));