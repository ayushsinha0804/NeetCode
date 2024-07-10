height = [1,8,6,2,5,4,8,3,7];
var maxArea = function(height) {
    let l=0;
    let r=height.length-1;
    let res=0;
    while(l<r){
        if((Math.min(height[l],height[r])*(r-l))>res){
            res=(Math.min(height[l],height[r])*(r-l));
        }
        else{
            if(height[l]<height[r]){
                l++;
            }
            else{
                r--;
            }
        }
    }
    return res;
};