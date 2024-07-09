let arr=[1,2,3,1];
let c= containsDuplicates(arr);
function containsDuplicates(arr)
{
    const s=new Set();
    for(let num of arr){
        if(s.has(num)){
            return true;
        }
        s.add(num);
    }
    return false;
};
document.write(c);