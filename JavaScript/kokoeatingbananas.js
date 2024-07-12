let piles=[3,6,7,11];
let h=8;
let mi=function(piles,h){
    let left=1;
    let right=Math.max(...piles);
    while(left<right){
        let mid=Math.floor((left+right)/2);
        let totalHours=0;
        for(const pile of piles){
            totalHours +=Math.ceil(pile/mid);
        }
        if(totalHours<=h){
            right=mid;
        }
        else{
            left=mid+1;
        }
    }
    return left;
};
document.write(mi(piles,h));