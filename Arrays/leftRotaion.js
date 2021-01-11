//PROBLEM DESCRIPTION
//https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays


function rotLeft(a, d) {

    for (let i=0; i<d; i++){
        
        let rotatedValue = a.shift(i,1);
        a.push(rotatedValue);
        }
        
        return a;
    }
