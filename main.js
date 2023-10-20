/* Getting numbers to show up,
    getting those numbers to display total in window, maybe even be animated when clicked on */


const totalPreview = document.getElementById('total');
const numberButtons = document.getElementsByClassName('number');
const allOperations = document.querySelectorAll('.operator');


const equalSign = document.querySelector('#equal');

let mathToComp = '';

for (let button of numberButtons) {
  button.addEventListener('click', (e) => {
    totalPreview.innerText += e.target.innerText;
    mathToComp += numberButtons.innerText
  });
};


// THE EQUAL SIGN /\/\

equalSign.addEventListener('click', (e) => {
  let result = eval(totalPreview.innerText);
  totalPreview.innerText = result;
  mathToComp = '';

})

// Getting my clear button to work, also a base

let allClear = document.getElementById('clear')
allClear.addEventListener('click', (e) => {
  totalPreview.innerText = "";
  mathToComp = '';
}); console.log(allClear)


// Getting operators to show on display, base function for getting numbers to show on display */  

for (let button of allOperations) {
  button.addEventListener('click', (e) => {
    totalPreview.innerText += e.target.innerText;
  }); console.log(allOperations)
}

// slash to divide /\/\/\/\/\\/\/\/\/\/





