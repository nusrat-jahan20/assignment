// Problem 5: Convert your gems into diamond

function  gemsToDiamond(firstFrndzGems, secondFrndzGems, thirdFrndzGems) {
    let totalDiamond = (firstFrndzGems * 21) + (secondFrndzGems *32) + (thirdFrndzGems * 43);
    if(totalDiamond >= 1000 * 2) {
        let mineDimond = totalDiamond - 2000;
        return mineDimond;
    }
    else {
        return totalDiamond;
    }
}

let output = gemsToDiamond(100, 5, 1);
console.log(output);