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

// random colour
function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  const randColor = 'rgb(' + color.join(', ') + ')';
  return randColor;
  // console.log('checked')
} 

const randomColour = document.getElementsByClassName('random');
for (const random of randomColour) {
  document.addEventListener('mouseover', event => {
      event.target.style.fill = randomColor();
});
}





