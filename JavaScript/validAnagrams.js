let s="rose";
let t="ores";
function checkAnagrams(s,t){
    if(s.length!=t.length){
        document.write("caught ");
        return false;
    }
    const sortedS=s.split('').sort().join('');
    const sortedT=t.split('').sort().join('');
    if(sortedS==sortedT){
        return true;
    }
    return false;
};
document.write(checkAnagrams(s,t));