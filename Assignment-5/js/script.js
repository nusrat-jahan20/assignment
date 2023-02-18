// connect blog file

const btnBlog = document.getElementById('btn-blog');

btnBlog.addEventListener('click', function() {
    window.location.href = 'blog.html'
})

// calculate triangle area

document.addEventListener("mouseover", function(){
  document.getElementsByClassName('random-color').style.backgroundColor = randomColor();
});

document.querySelector('random-color').addEventListener('mouseover', event => {
      event.target.style.fill = randomColor();
});

document.getElementById('btn-calculate-triangle').addEventListener('click', function() {
    // get base value
    const baseValueString = document.getElementById('triangle-base').value;
    const baseValue = parseFloat(baseValueString);

    // get height value
    const heightValueString = document.getElementById('triangle-height').value;
    const heightValue = parseFloat(heightValueString);

    if(check(baseValueString) && check(heightValueString)){    
        // calculate area
        const triangleArea = 0.5 * baseValue * heightValue;
        
        // set result to area calculation
        const container = document.getElementById('table-container');

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${countRow()}</td>
            <td>Triangle</td>
            <td>${triangleArea}</td>
            <td>
                <button class="btn btn-primary">Convert to m<sup>2</sup></button>
            </td>
        `;
        container.appendChild(tr);
    }
})


// calculate ractangle area

document.getElementById('btn-calculate-ractangular').addEventListener('click', function() {
    // get base value
    const widthValueString = document.getElementById('ractangle-width').value;
    const widthValue = parseFloat(widthValueString);
    
    // get height value
    const lengthValueString = document.getElementById('ractangle-length').value;
    const lengthValue = parseFloat(lengthValueString);
    
    if(check(widthValueString) && check(lengthValueString)) {
        // calculate area
        const ractangleArea = widthValue * lengthValue;
        
        // set result to area calculation
        const container = document.getElementById('table-container');

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${countRow()}</td>
            <td>Ractangle</td>
            <td>${ractangleArea}</td>
            <td>
                <button class="btn btn-primary">Convert to m<sup>2</sup></button>
            </td>
        `;
        container.appendChild(tr);
    }
})


// calculate parallelogram area

document.getElementById('btn-calculate-parallelogram').addEventListener('click', function() {
    // get base value
    const baseValueString = document.getElementById('parallelogram-base').value;
    const baseValue = parseFloat(baseValueString);
    
    // get height value
    const heightValueString = document.getElementById('parallelogram-height').value;
    const heightValue = parseFloat(heightValueString);
    
    // calculate area
    const parallelogramArea = baseValue * heightValue;
    
    // set result to area calculation
    const container = document.getElementById('table-container');

    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${countRow()}</td>
        <td>Parallelogram</td>
        <td>${parallelogramArea}</td>
        <td>
            <button class="btn btn-primary">Convert to m<sup>2</sup></button>
        </td>
    `;
    container.appendChild(tr);
})


// calculate rhombus area

document.getElementById('btn-calculate-rhombus').addEventListener('click', function() {
    // get base value
    const d1ValueString = document.getElementById('rhombus-d1').value;
    const d1Value = parseFloat(d1ValueString);
    
    // get height value
    const d2ValueString = document.getElementById('rhombus-d2').value;
    const d2Value = parseFloat(d2ValueString);
    
    // calculate area
    const rhombusArea = 0.5 * d1Value * d2Value;
    
    // set result to area calculation
    const container = document.getElementById('table-container');

    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${countRow()}</td>
        <td>Rhombus</td>
        <td>${rhombusArea}</td>
        <td>
            <button class="btn btn-primary">Convert to m<sup>2</sup></button>
        </td>
    `;
    container.appendChild(tr);
})


// calculate pentagon area

document.getElementById('btn-calculate-pentagon').addEventListener('click', function() {
    // get base value
    const pentagonPentaValueString = document.getElementById('pentagon-penta').value;
    const pentagonPentaValue = parseFloat(pentagonPentaValueString);
    
    // get height value
    const pentagonBaseValueString = document.getElementById('pentagon-base').value;
    const pentagonBaseValue = parseFloat(pentagonBaseValueString);
    
    // calculate area
    const pentagonArea = 0.5 * pentagonPentaValue * pentagonBaseValue;
    
    // set result to area calculation
    const container = document.getElementById('table-container');

    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${countRow()}</td>
        <td>Pentagon</td>
        <td>${pentagonArea}</td>
        <td>
            <button class="btn btn-primary">Convert to m<sup>2</sup></button>
        </td>
    `;
    container.appendChild(tr);
})


// calculate ellipse area

document.getElementById('btn-calculate-ellipse').addEventListener('click', function() {
    // get base value
    const ellipseAValueString = document.getElementById('ellipse-a').value;
    const ellipseAValue = parseFloat(ellipseAValueString);
    
    // get height value
    const ellipseBValueString = document.getElementById('ellipse-b').value;
    const ellipseBValue = parseFloat(ellipseBValueString);
    
    // calculate area
    const totalEllipseArea = 3.14 * ellipseAValue * ellipseBValue;
    const ellipseArea = totalEllipseArea. toFixed(2);

    
    // set result to area calculation
    const container = document.getElementById('table-container');

    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${countRow()}</td>
        <td>Ellipse</td>
        <td>${ellipseArea}</td>
        <td>
            <button class="btn btn-primary">Convert to m<sup>2</sup></button>
        </td>
    `;
    container.appendChild(tr);
})