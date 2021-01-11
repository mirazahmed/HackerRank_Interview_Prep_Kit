//PROBLEM DESCRIPTION
//https://www.hackerrank.com/challenges/mark-and-toys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting


function maximumToys(prices, k) {

    prices.sort((a,b)=>{
        return a-b;
    })
    
    let maximumToys = 0;
    let costOfToys = 0;
    
    for (let i=0; i<prices.length; i++){
        if ((costOfToys < k)&& 
        ((costOfToys + prices[i]) < k)){
            costOfToys += prices[i];
            maximumToys++;
        }
        
        else {
            break;
        }
    }
    
    return maximumToys;   
    
}