// Problem 5: Convert your gems into diamond
// The 'gemsToDiamond()' function will take three number as input parameter which represnts number of gems of three friends. 1st frnd can convert his gems into 21 times dimond. 2nd frnd can convert his gems into 32 times dimond. 3rd frnd can convert his gems into 43 times dimond. If total of 3 frndz dimond will greater than or equal double of 1000 then return total-dimond - 2000. Or return total number of dimond.

function  gemsToDiamond(firstFrndzGems, secondFrndzGems, thirdFrndzGems) {
    if (typeof(firstFrndzGems) == 'number' && typeof(secondFrndzGems) == 'number' && typeof(thirdFrndzGems) == 'number') {
        let totalDiamond = (firstFrndzGems * 21) + (secondFrndzGems *32) + (thirdFrndzGems * 43);
        if(totalDiamond >= 1000 * 2) {
            let mineDimond = totalDiamond - 2000;
            return mineDimond;
        }
        else {
            return totalDiamond;
        }
    }  
    else {
        return 'Please input all valid numbers.'
    } 
}

let output = gemsToDiamond(100, 5);
console.log(output);


