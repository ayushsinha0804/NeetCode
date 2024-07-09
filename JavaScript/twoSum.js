//to execute the code, paste the code given below in comments to the checker.html file
//<script src="twoSum.js"></script>

let num=[2,7,11,15];
let target=9;
function twoSum(num, target){
    const s=new Set();
    for(let n of num){
        s.add(n);
    }
    for(let n of num){
        if(s.has(target-n)){
            return true;
        }
    }
    return false;
};
document.write(twoSum(num, target));
