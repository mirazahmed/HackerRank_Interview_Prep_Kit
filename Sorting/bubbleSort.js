//PROBLEM DESCRIPTION

//https://www.hackerrank.com/challenges/ctci-bubble-sort/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting

function countSwaps(a) {
    let tempValue;
    let numSwaps = 0;
    let valueSwapped;
    
    for (let i=0; i<a.length; i++){

        valueSwapped = true;
        for (let j=0; j < a.length-1; j++){
            if (a[j] > a[j+1]){
                tempValue = a[j+1];
                a[j+1]=a[j];
                a[j]=tempValue;
                numSwaps++;
                valueSwapped = false;
            }
        }
        if(valueSwapped) break;
    }
    console.log(`Array is sorted in ${numSwaps} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[a.length-1]}`);
}