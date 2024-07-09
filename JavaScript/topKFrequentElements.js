//to execute the code, paste the code given below in comments to the checker.html file
//<script src="topKFrequentElements.js"></script>

let nums=[1,1,1,1,2,2,2,2,2,2,3,3,3,3,3];
let k=3;
function topKfreq(nums,k){
    let topKfreq=new Map();
    for(let n of nums){
        if(topKfreq.has(n)){
            topKfreq.set(n,topKfreq.get(n)+1);
        }
        else{
            topKfreq.set(n,1);
        }
    }
    let freqArray = Array.from(topKfreq.entries());
    freqArray.sort((a, b) => b[1] - a[1]); 
    let top2 = freqArray.slice(0, k).map(entry => entry[0]);
    document.write(JSON.stringify(top2));
}
topKfreq(nums, k);
