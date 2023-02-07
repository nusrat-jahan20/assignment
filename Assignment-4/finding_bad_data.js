// Problem 4: Finding Bad data

function findingBadData(numbers) {
    let count = 0;
    for(i = 0; i < numbers.length; i++) {
        if(numbers[i] < 0) {
            count++;
        }
    }
    return count;
}

let array =  [ 2, -5, -7, -13 ];
let output = findingBadData(array);
console.log(output);