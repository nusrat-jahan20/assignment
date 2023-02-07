// Problem 2: Finding even or odd

function evenOdd(string) {
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

let output = evenOdd('phero');
console.log(output);