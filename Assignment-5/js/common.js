// check input validation

function check(inputNumber) {
    if(inputNumber === '' || inputNumber < 0) {
        alert('Please enter a valid number');
        return 0;
    }
    return 1;
}

// count Row
function countRow() {
    let table = document.getElementById("table-container");
    return rowCount = table.rows.length + 1;
    
}


// change background-colour randomly
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color. push(Math. floor(Math. random() * 256));
    }
    return 'rgb(' + color. join(', ') + ')';
}
