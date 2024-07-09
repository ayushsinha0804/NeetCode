//to execute the code, paste the code given below in comments to the checker.html file
//<script src="productExceptSelf.js"></script>

let nums=[2,0,3,4];
function arrayeself(nums){
    let prod=1;
    let flag=0;
    for(let n of nums){
        if(n==0){
            flag=flag+1;
        }
        else{
            prod=prod*n;
        }
    }
    let newArray = new Array(nums.length).fill(prod);
    for(let i=0;i<newArray.length;i++){
        if(flag==1){
            if(nums[i]==0){
                newArray[i]=prod;
            }
            else{
                newArray[i]=0;
            }
        }
        else if(flag>1){
            newArray[i]=0;
        }
        else{
            newArray[i]=newArray[i]/nums[i];
        }
    }
    document.write(newArray);
}
arrayeself(nums);
