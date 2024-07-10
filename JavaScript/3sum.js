let arr=[-1,0,1,2,-1,-4];
let res= function(arr){
    const result=[];
    arr.sort((a,b)=>a-b);
    for(let i=0;i<arr.length-2;i++){        
        let j=i+1;
        let k=arr.length-1;
        while(j<k){
            let sum=arr[i]+arr[j]+arr[k];
            triplet=[arr[i],arr[j],arr[k]];
            if(sum===0){
                if(!checkDuplicate(result,triplet)){
                    result.push(triplet);
                }
                j++;
                k--;

            }
            else if(sum>0){
                k--;
            }
            else{
                j++;
            }
        }
    }
    return result;
};
function checkDuplicate(result,triplet){
    for(let t of result){
        if(t[0]==triplet[0] && t[1]==triplet[1] && t[2]==triplet[2]){
            return true;
        }
    }
}
document.write(JSON.stringify(res(arr)));