// Problem 3: Is Less or Greater than seven

function isLGSeven(number) {
    const difference = number - 7;
    if(difference < 7) {
        return difference;
    }
    else {
        return (number * 2);
    }
}

let output = isLGSeven(15);
console.log(output);