let arr=[0,3,7,2,5,8,4,6,0,1];
const count= function(arr){
    arr.sort((a,b)=>a-b);
    let innercount=0;
    let result=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]+1===arr[i+1]){
            innercount++;
        }
        else if(arr[i]!== arr[i+1]){
            innercount=0;
        }
        if(innercount>result){
            result=innercount;
        }
    }
    return result+1;
};
document.write(count(arr));