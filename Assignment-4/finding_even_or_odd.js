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

let output = evenOdd(true);
console.log(output);