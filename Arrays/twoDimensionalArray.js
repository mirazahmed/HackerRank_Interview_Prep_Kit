//Problem Description
// https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays


function hourglassSum(arr) {

  let hourglassSum=[];

  for (let k=0; k<4; k++){
    
        for (let i=0;i<4; i++){
    
        let sum = 0;
        sum= arr[k][i]+arr[k][i+1]+arr[k][i+2]+arr[k+1][i+1]+arr[k+2][i]
        +arr[k+2][i+1]+arr[k+2][i+2];

        hourglassSum.push(sum);
    
    }

  }
  
return Math.max(...hourglassSum);
}