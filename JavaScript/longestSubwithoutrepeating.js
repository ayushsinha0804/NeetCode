let s="abcabcbb";
let c= function(str){
    let max=0;
    let set=new Set();
    let left=0;
    let right=0;
    while(right<str.length){
        if(!set.has(str[right])){
            set.add(str[right]);
            max=Math.max(max,(right-left+1));
            right++;
        }
        else{
            set.delete(str[left]);
            left++;
        }
    }
    return max;
}
document.write(c(s));