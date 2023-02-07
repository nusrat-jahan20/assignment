// Problem 1: Let’s play a mind game
// This function will take a positive number as input. Then it will multiply the number by 3, then adding 10 to the result, then dividing the result by 2, then subtract 5 from the result. After this whole calculation the function will return the result

function mindGame(positiveNumber) {
    let result = (((positiveNumber * 3) + 10) / 2) - 5;
    return result;
}

let total = mindGame(5);
console.log(total);
