class Calculator {
    constructor(display_div) {
        this.display_div = display_div;
        this.clear();
    }

    // Clears the display
    clear() {
        this.display = "";
        this.operation = undefined;
    }

    // Adds numbers to the display one by one
    appendNumber(number) {
        // "add" the two elements together so that the numbers can aggregate on screen instead of actually summed up
        this.display = this.display.toString() + number.toString();
    }

    chooseOperation(operation) {

    }

    // operate() {

    // }

    //Updates display with innerText of button clicked on screen
    updateDisplay() {
        this.display_div.innerText = this.display;
    }
}

const numbers = [...Array(10).keys()];
//Array() - Creates an array to the 'argument' length, in this case '10'
//.keys() - Returns an array of an object in the same order a normal loop would 
const numSelect_button = document.querySelectorAll('[data-number]')
const opSelect_button = document.querySelectorAll('[data-operate]')
const clearSelect_button = document.querySelector('[data-clear]')
const equalSelect_button = document.querySelector('[data-equals]')
const display_div = document.querySelector('[data-display]')

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

// Step 3 - Input
// Define display_div as an empty array
let calcDisplay = [];
// Adds calcInput into empty array
// function entryDisplay(calcInput) {    
//     // while (calcEntry.operator == "undefined" && Number.isInteger(calcInput) == "true") {    
//     if (calcInput >= 0 || calcInput <= 10 || calcInput == '.') {
//         calcDisplay.push(calcInput); //Defines display as an expanding array
//         let joinDisplay = calcDisplay.join("");
//         console.log(joinDisplay); //Purpose is to display in console
//         return joinDisplay;
//     } else if (calcInput == '+' || calcInput == "/" || calcInput == "-" || calcInput == "*" || calcInput == "square") {
//         calcEntry.operator = calcInput;
//         return "";
//     } else if (calcInput == "=") {
//         // operate();
//         return "Final Calculation";
//     }
//     // }
// }

const calculator = new Calculator(display_div)

// Displays a value for each element pressed on screen
numSelect_button.forEach(numSelect_button => {
    numSelect_button.addEventListener('click', () => {
        calculator.appendNumber(numSelect_button.innerText);
        calculator.updateDisplay();
        // let calcInput = numSelect_button.dataset.number;
        // display_div.innerHTML = entryDisplay(calcInput);
    })
})

// Calculation Object
let calcEntry = {};
calcEntry.a = calcDisplay;
// calcEntry.b -> needs a new variable after operator is input
// calcEntry.operator 
