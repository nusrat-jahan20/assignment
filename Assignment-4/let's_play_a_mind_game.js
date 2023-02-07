// Problem 1: Let’s play a mind game

function mindGame(positiveNumber) {
    let result = (((positiveNumber * 3) + 10) / 2) - 5;
    return result;
}

let total = mindGame(33);
console.log(total);
