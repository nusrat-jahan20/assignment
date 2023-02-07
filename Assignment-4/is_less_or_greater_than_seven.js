// Problem 3: Is Less or Greater than seven
// The 'isLGSeven()' function will take a number as input. The function have to find the difference between the number and 7, then it will compare if the difference is either less than 7 or not. If the difference is less then 7 then the function will return the difference. If not then the function will return double of the input number.

function isLGSeven(number) {
    if (typeof(number) == 'number') {
        const difference = number - 7;
        if(difference < 7) {
            return difference;
        }
        else {
            return (number * 2);
        }
    }
    else {
        return 'Please input a valid number.'
    }
}

let output = isLGSeven(15);
console.log(output);