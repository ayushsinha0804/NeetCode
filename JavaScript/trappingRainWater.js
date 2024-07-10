let height=[4,2,0,3,2,5];
let maxHeight= function(arr){
    let sum=0;
    let left=new Array(arr.length);
    let right=new Array(arr.length);
    let leftCheck=arr[0];
    let rightCheck=arr[arr.length-1];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>leftCheck){
            leftCheck=arr[i];
        }
        left[i]=leftCheck;
    }
    for(let i=arr.length-1;i>=0;i--){
        if(arr[i]>rightCheck){
            rightCheck=arr[i];
        }
        right[i]=rightCheck;
    }
    for(let i=0;i<arr.length;i++){
        sum+=Math.min(left[i],right[i])-arr[i];

    }
    return sum;
}
document.write(maxHeight(height));