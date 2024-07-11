let s="abcabcbb";
let c= function(s){
    let long='';
    let check=set();
    let note=0;
    for(let i=0;i<s.length;i++){
        let char =s[i];
        if(!check.has(char)){
            check.add(char);
            if(check.length==1){
                note=i;
            }
        }
        else{
            if(check.length>long.length){
                long=check.join('');
            }
            i=note+1;
        }
    }
    return long;
}
document.write(c(s));