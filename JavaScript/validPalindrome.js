let strs="racecar";
let check=function(strs){
    const cleanedS=strs.toLowerCase().replace(/[^a-z0-9]/g,'');
    return cleanedS===cleanedS.split('').reverse().join('');
};
document.write(check(strs));