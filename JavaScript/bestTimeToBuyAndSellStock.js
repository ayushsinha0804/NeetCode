let prices=[7,1,5,3,6,4];
let maxProfit = function(prices){
    let minPrice = prices[0];
    let maxProfi = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            let profit = prices[i] - minPrice;
            if (profit > maxProfi) {
                maxProfi = profit;
            }
        }
    }
    return maxProfi;
};
document.write(maxProfit(prices));