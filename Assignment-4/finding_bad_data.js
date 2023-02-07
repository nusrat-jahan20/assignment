// Problem 4: Finding Bad data
// The 'findingBadData()' function will take an array as input which contains some positive or negetive numbers or zero. The function will find then number of negetive numbers in the array and return it.

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

let array =  [ 2, -5, -7, -13, 'r' ];
let output = findingBadData(array);
console.log(output);



