// Create Title 

let contair = document.querySelector('.container');
const title = document.createElement('h1');
title.classList.add('title');
title.innerText = 'Distance Converter';
title.style.color = 'white';
title.style.backgroundColor = '#333333';
title.style.height = '70px';
title.style.paddingTop = '20px';
title.style.textAlign = 'center';
contair.appendChild(title);

let allDiv = document.createElement('div');
allDiv.classList.add('inner');
allDiv.style.backgroundColor = 'grey';
allDiv.style.height = '500px';
contair.appendChild(allDiv);

let firstInput = document.createElement('div');
firstInput.classList.add('First');
firstInput.style.padding = '40px'
allDiv.appendChild(firstInput);


let lab = document.createElement('label');
lab.innerText = 'From :';
lab.style.fontSize = '20px';
firstInput.appendChild(lab);

let input1 = document.createElement("input");
input1.type = 'text';
input1.classList.add('firstI')
input1.value = "12 ";
input1.style.height = "20px";
firstInput.appendChild(input1);


let select1 = document.createElement('select');
select1.style.height = '25px';
firstInput.appendChild(select1);



let param = ['Kilometers', 'Meters', 'Centimeters', 'Millimeters', 'Miles', 'Yards', 'Feet', 'Inches']
param.forEach((x) => {
    let option1 = document.createElement('option');
    option1.value = x;
    option1.text = x;
    option1.style.fontSize = '16px'
    select1.appendChild(option1);
})


let button = document.createElement('button');
button.innerText = 'Convert';
button.style.color = ' white';
button.style.height = '50px';
button.style.width = '150px';
button.style.backgroundColor = '#333333';
button.style.marginLeft = ' 400px';
button.style.fontSize = '20px';
allDiv.appendChild(button);

let secondInput = document.createElement('div');
secondInput.classList.add('second');
secondInput.style.padding = '40px'
allDiv.appendChild(secondInput);


let lab1 = document.createElement('label');
lab1.innerText = 'From :';
lab1.style.fontSize = '20px';
secondInput.appendChild(lab1);

let input2 = document.createElement("input");
input2.type = 'text';
input2.classList.add('secondI')
input2.value = ' ';
input2.style.height = "20px";
secondInput.appendChild(input2);


let select2 = document.createElement('select');
select2.style.height = '25px';
secondInput.appendChild(select2);

let param2= ['Kilometers', 'Meters', 'Centimeters', 'Millimeters', 'Miles', 'Yards', 'Feet', 'Inches']
param2.forEach((x) => {
    let option2 = document.createElement('option');
    option2.value = x;
    option2.text = x;
    option2.style.fontSize = '16px'
    option2.style.bottom = '30px'
    select2.appendChild(option2);
})

const firstinp = document.querySelector('.firstI');
let x = firstinp.value;
console.log(x);
const secondinp = document.querySelector('.secondI');



// let y = secondinp.value;
// y = x;
// console.log(y);
const result = () => {
    console.log(secondinp.value = firstinp.value);
  
}

button.addEventListener('click', result); 