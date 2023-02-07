// Problem 1: Let’s play a mind game
// The 'mindGame' function will take a positive number as input. Then it will multiply the number by 3, then adding 10 to the result, then dividing the result by 2, then subtract 5 from the result. After this whole calculation the function will return the result.

function mindGame(positiveNumber) {
    if(typeof(positiveNumber) == 'number') {
        let result = (((positiveNumber * 3) + 10) / 2) - 5;
        return result;
    }
    else {
        return 'Please input a positive number.'
    }
}




// Problem 2: Finding even or odd
// The 'evenOdd' function will take a string as input. The function will return 'even' if the input string length is even otherwise if the length is odd then the function will return 'odd'.

function evenOdd(string) {
    if(typeof(string) == 'string') {
        sum = 0;
        for(i = 0; i < string.length; i++) {
            sum++;
        }
        if(sum % 2 == 0) {
            return 'even';
        }
        else {
            return 'odd';
        }
    }
    else {
        return 'Please input string.'
    }
}