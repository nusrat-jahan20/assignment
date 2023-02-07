// Problem 5: Convert your gems into diamond
// The 'gemsToDiamond()' function will take three number as input parameter which represnts number of gems of three friends. 

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

let output = gemsToDiamond(100, 5, 'r');
console.log(output);


