class Calculator {
    // Class will create a "calculator" object that can hold multiple properties
    constructor(display_div) {
        this.display_div = display_div;
        this.clear();
    }

    // Clears the display
    clear() {
        this.display = "";
        this.firstEntry = "";
        this.secondEntry = "";
        this.operation = undefined;
    }

    delete() {
        this.currentEntry = this.display;
        this.arrayEntry = this.currentEntry.split('');
        // remove last index of array by defining a new spliced array
        this.spliceEntry = this.arrayEntry.pop();
        // this.display = spliced array
        this.display = this.arrayEntry.join("");
        console.log(this.arrayEntry);
    }

    // Adds numbers to the display one by one
    appendNumber(number) {
        // "add" the two elements together so that the numbers can aggregate on screen instead of actually summed up
        if (number === '.' && this.display.includes('.')) return
        this.display = this.display.toString() + number.toString();
    }

    chooseOperation(operation) {
        // Saves entry of this.display into this.firstEntry to be used later
        if (this.firstEntry == "") {
            this.operation = operation;
            this.firstEntry = this.display;
            this.display = "";
        } else if (typeof(this.firstEntry) == "string" || typeof(this.firstEntry) == "number") {
            this.operate();
            this.operation = operation;
            this.firstEntry = this.result;
            // this.display = "";
        } 
    }

    add() {
        this.result = parseFloat(this.firstEntry) + parseFloat(this.secondEntry);
        this.display = this.result;
    };
    
    subtract() {
        this.result = parseFloat(this.firstEntry) - parseFloat(this.secondEntry);
        this.display = this.result;
    };
    
    multiply() {
        this.result = parseFloat(this.firstEntry) * parseFloat(this.secondEntry);
        this.display = this.result;
    }
    
    divide() {
        this.result = parseFloat(this.firstEntry) / parseFloat(this.secondEntry);
        this.display = this.result;
    }
    
    operate() {
        this.secondEntry = this.display;
        if (this.operation === '+') return this.add();
        if (this.operation === '-') return this.subtract();
        if (this.operation === '*') return this.multiply();
        if (this.operation === '/') return this.divide();
    }

    //Updates display with innerText of button clicked on screen
    updateDisplay() {
        this.display_div.innerText = this.display;
    }
}

// const numbers = [...Array(10).keys()];
//Array() - Creates an array to the 'argument' length, in this case '10'
//.keys() - Returns an array of an object in the same order a normal loop would 
const numSelect_button = document.querySelectorAll('[data-number]')
const opSelect_button = document.querySelectorAll('[data-operate]')
const clearSelect_button = document.querySelector('[data-clear]')
const deleteSelect_button = document.querySelector('[data-delete]')
const equalSelect_button = document.querySelector('[data-equals]')
const display_div = document.querySelector('[data-display]')

// Step 3 - Input
// Define display_div as an empty array
// let calcDisplay = [];
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
    })
})

opSelect_button.forEach(opSelect_button => {
    opSelect_button.addEventListener('click', () => {
        calculator.chooseOperation(opSelect_button.innerText);
        calculator.updateDisplay();
    })
})

equalSelect_button.addEventListener('click', () => {
    calculator.operate();
    calculator.updateDisplay();
})

clearSelect_button.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteSelect_button.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})