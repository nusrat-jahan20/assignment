// Problem 1: Let’s play a mind game
// The 'mindGame()' function will take a positive number as input parameter. Then it will multiply the number by 3, then adding 10 to the result, then dividing the result by 2, then subtract 5 from the result. After this whole calculation the function will return the result.

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
// The 'evenOdd()' function will take a string as input parameter. The function will return 'even' if the input string length is even otherwise if the length is odd then the function will return 'odd'.

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




// Problem 3: Is Less or Greater than seven
// The 'isLGSeven()' function will take a number as input parameter. The function have to find the difference between the number and 7, then it will compare if the difference is either less than 7 or not. If the difference is less then 7 then the function will return the difference. If not then the function will return double of the input number.

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




// Problem 4: Finding Bad data
// The 'findingBadData()' function will take an array as input parameter which contains some positive or negetive numbers or zero. The function will find then number of negetive numbers in the array and return it.

function findingBadData(numbers) {
    if(typeof(numbers) == 'object') {
        let count = 0;
        for(i = 0; i < numbers.length; i++) {
            if(typeof(numbers[i]) =='number') {
                if(numbers[i] < 0) {
                    count++;
                }
            }
            else {
                return 'Please provide all valid numbers.'
            }
        }
        return count;
    }
    else {
        return 'Please enter an array.'
    }
}




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