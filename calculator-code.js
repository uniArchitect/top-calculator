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
//Define display_span as an empty array - firstEntry
let firstEntry = [];
//Adds calcInput into empty array - secondEntry
function firstDisplay(calcInput) {
    firstEntry.push(calcInput); //Defines firstDisplay as an expanding array
    let joinDisplay = firstEntry.join("");
    console.log(joinDisplay); //Purpose is to display in console
    return joinDisplay;
}

//Define display_span as an empty array - secondEntry
let secondEntry = [];
//Adds calcInput into empty array - secondEntry
// function secondDisplay(calcInput) {
//     secondEntry.push(calcInput);
//     let joinDisplay = secondEntry.join("");
//     console.log(joinDisplay);
//     return joinDisplay;
// }

//Displays a value for each element pressed on screen
numSelection.forEach(numSelection => {
    numSelection.addEventListener('click', () => {
        let calcInput = numSelection.dataset.selection;
        display_span.innerHTML = firstDisplay(calcInput);
        let firstEntry = display_span.innerHTML;
        //Create if statements to divide whether integers or operators are input
        if (Number.isInteger(firstEntry) == true) {
            // let calculation = firstEntry;
            // return true;
        }
    })
})

//Calculation Object
let calcEntry = {};
calcEntry.a = firstEntry;
// calcEntry.b -> needs a new variable after operator is input
// calcEntry.operator -> operator variable input
