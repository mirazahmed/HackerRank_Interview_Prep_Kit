//PROBLEM DESCRIPTION
//https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays


function minimumBribes(q) {
    
    let total = 0;

    for(let currentPosition = 0; currentPosition < q.length; currentPosition++)     { 
        // getting original position using 0 indexing
        const originalPosition = q[currentPosition] - 1;
        
        // diff = how far person has moved
        const diff = originalPosition - currentPosition;
                
        if(diff > 2) return console.log("Too chaotic");

        if(diff <= 0){
            // check each person starting from one person ahead of original pos
            // up until current position
            for(let i = Math.max(0, originalPosition - 1); 
            i < currentPosition; i++){ 
                
                const startPositionForwardPerson = q[i] - 1;
                // if a person in front of current person started BEHIND
                // current person, then current person MUST have been bribed by them
                if(startPositionForwardPerson > originalPosition){
                    total++;
                }
            }
        }
    }

    console.log(total); 
}