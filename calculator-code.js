const numbers = [...Array(10).keys()];
//Array() - Creates an array to the 'argument' length, in this case '10'
// .keys() - Returns an array of an object in the same order a normal loop would 
const numSelection = document.querySelectorAll('[data-selection]')
//Gives data-selection property a connection to JS
//numSelection to be used as an event listener to store data for each operator and number
const display_span = document.getElementById('display')

//Step 1 - Basic Operations
function add(intOne, intTwo) {
	let sum = intOne + intTwo;
    return sum;
};

function subtract(intOne, intTwo) {
	let difference = intOne - intTwo;
    return difference;
};

function multiply(intOne, intTwo) {
    let product = intOne * intTwo;
    return product;
}

function divide(dividend, divisor) {
    let quotient = dividend /= divisor;
    return quotient;
}

function power(number) {
    let product = number * number;
    return product;
}

//Step 2 - Operate
function operate(operator, a, b) {
    if (operator == '+') return add(a,b)
    if (operator == '-') return subtract(a,b)
    if (operator == '*') return multiply(a,b)
    if (operator == '/') return divide(a,b)
    if (operator == 'square') return power(a,b)
}

//Step 3 - Input
//Define display_span as an empty array
let calcDisplay = [];
//Adds calcInput into empty array
function addDisplay(calcInput) {
    calcDisplay.push(calcInput); //Defines calcDisplay as an expanding array
    let joinDisplay = calcDisplay.join("");
    console.log(joinDisplay); //Purpose is to display in console
    return joinDisplay;
}

//Displays a value for each element pressed on screen
numSelection.forEach(numSelection => {
    numSelection.addEventListener('click', () => {
        let calcInput = numSelection.dataset.selection;
        display_span.innerHTML = addDisplay(calcInput);
    })
})


