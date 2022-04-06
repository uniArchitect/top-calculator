class calculator {
    
    // Clears the display
    clear() {

    }

    // Adds numbers to the display one by one
    appendNumber(number) {
        this.display_div = this.display_div.toString() + number.toString();
    }

    chooseOperation(operation) {

    }

    // operate() {

    // }

    updateDisplay() {
        
    }
}

const numbers = [...Array(10).keys()];
//Array() - Creates an array to the 'argument' length, in this case '10'
//.keys() - Returns an array of an object in the same order a normal loop would 
const numSelect_button = document.querySelectorAll('[data-number]')
const opSelect_button = document.querySelectorAll('[data-operate]')
const clearSelect_button = document.querySelector('[data-clear]')
const equalSelect_button = document.querySelector('[data-equals]')
//Gives data-selection property a connection to JS
//numSelection to be used as an event listener to store data for each operator and number
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
// Define display_span as an empty array
let calcDisplay = [];
// let secondEntry = [];
// Adds calcInput into empty array
function entryDisplay(calcInput) {   
    // Create a second condition for the function to allow for a second entry, calcEntry.b , and erase the current display 
    // while (calcEntry.operator == "undefined" && Number.isInteger(calcInput) == "true") {    
    if (calcInput >= 0 || calcInput <= 10 || calcInput == '.') {
        calcDisplay.push(calcInput); //Defines display as an expanding array
        let joinDisplay = calcDisplay.join("");
        console.log(joinDisplay); //Purpose is to display in console
        return joinDisplay;
    } else if (calcInput == '+' || calcInput == "/" || calcInput == "-" || calcInput == "*" || calcInput == "square") {
        calcEntry.operator = calcInput;
        return "";
    } else if (calcInput == "=") {
        // operate();
        return "Final Calculation";
    }
    // }
}

// Displays a value for each element pressed on screen
numSelect_button.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
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
