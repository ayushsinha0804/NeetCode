var encode= function(strs){
    return strs.map(strs=>`${strs.length}/${strs}`).join('');
}
var decode= function(s){
    const res=[];
    let i=0;
    while(i<s.length){
        const slashIndex=s.indexOf('/',i);
        const length=parseInt(s.slice(i,slashIndex));
        res.push(s.slice(slashIndex+1,slashIndex+1+length));
        i=slashIndex+length+1;
    }
    return res;
}
let strs=["Hello","World","!"];
let s=encode(strs);
document.write(s);
let s2=decode(s);
document.write(s2);