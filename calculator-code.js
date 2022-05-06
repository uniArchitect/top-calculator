class Calculator {
    // Class will create a "calculator" object that can hold multiple properties
    constructor(DISPLAY_DIV, HISTORY_DIV) {
        this.DISPLAY_DIV = DISPLAY_DIV;
        this.HISTORY_DIV = HISTORY_DIV;
        this.clear();
    }

    // Clears the display
    clear() {
        this.display = "";
        this.equalOp = "";
        this.firstEntry = "";
        this.secondEntry = "";
        this.result = "";
        this.history = "";
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
        if (this.display.length == "9") return //Stops numbers from going offscreen
        this.display = this.display.toString() + number.toString();
    }

    enterHistory(operation) {
        this.firstEntry = this.display;
        this.operation = operation;
        this.history = this.display + " " + this.operation;
        this.display = "";    
    }

    chooseOperation(operation) {
        // Saves entry of this.display into this.firstEntry to be used later
        // if (this.display === "") return //Write the if statement so that the operator can change even if display is ""
        if (this.firstEntry == "") {
            this.enterHistory(operation);
        } else if (this.equalOp == "=") { //Allows to choose operation after clicking equal so that existing firstEntry is not used in operation
            this.enterHistory(operation);
        } else if (typeof(this.firstEntry) == "string" && typeof(this.secondEntry) == "" || typeof(this.firstEntry) == "number" && typeof(this.secondEntry) == "") {
            this.firstEntry = this.display;
            this.operation = operation;
            this.history = this.firstEntry + " " + this.operation;
            this.firstEntry = this.result;
            this.display = "";
        } else if (typeof(this.display) == "number" || typeof(this.display) == "string" && typeof(this.firstEntry) == "number" || typeof(this.firstEntry) == "string") {
            this.operate();
            this.enterHistory(operation);
        }
    }

    updateHistory() {
        this.display = this.result;
        this.history = this.firstEntry + " " + this.operation + " " + this.secondEntry + " " + this.equalOp;
        this.hiddenEntry = this.secondEntry;
        this.secondEntry = "";  
    }

    add() {
        this.result = parseFloat(this.firstEntry) + parseFloat(this.secondEntry);
        this.updateHistory();
    };
    
    subtract() {
        this.result = parseFloat(this.firstEntry) - parseFloat(this.secondEntry);
        this.updateHistory();
    };
    
    multiply() {
        this.result = parseFloat(this.firstEntry) * parseFloat(this.secondEntry);
        this.updateHistory();
    }
    
    divide() {
        // Prevents dividing by zero
        if (this.secondEntry === '0') return; 
        this.result = parseFloat(this.firstEntry) / parseFloat(this.secondEntry);
        this.updateHistory();
    }
    
    operate(equal_operator) {
        // Create a second object property for secondEntry that will store the value "secretly" to avoid operators being constantly run with consecutive clicks
        if (this.display == "") return
        if (this.secondEntry == "") {
            this.equalOp = equal_operator;             
            this.secondEntry = this.display; // This is creating an error. When equal is clicked, the new result becomes "secondEntry"
            if (this.operation === '+') return this.add();
            if (this.operation === '-') return this.subtract();
            if (this.operation === 'x') return this.multiply();
            if (this.operation === '÷') return this.divide();  
        }
    }

    //Updates display with innerText of button clicked on screen
    updateDisplay() {
        this.DISPLAY_DIV.innerText = this.display;
        this.HISTORY_DIV.innerText = this.history;
    }
}

const NUMSELECT_BUTTON = document.querySelectorAll('[data-number]')
const OPSELECT_BUTTON = document.querySelectorAll('[data-operate]')
const CLEARSELECT_BUTTON = document.querySelector('[data-clear]')
const DELETESELECT_BUTTON = document.querySelector('[data-delete]')
const EQUALSELECT_BUTTON = document.querySelector('[data-equals]')
const DISPLAY_DIV = document.querySelector('[data-display]')
const HISTORY_DIV = document.querySelector('[data-history]')

const calculator = new Calculator(DISPLAY_DIV, HISTORY_DIV)

// Displays a value for each element pressed on screen
NUMSELECT_BUTTON.forEach(NUMSELECT_BUTTON => {
    NUMSELECT_BUTTON.addEventListener('click', () => {
        calculator.appendNumber(NUMSELECT_BUTTON.innerText);
        calculator.updateDisplay();
    })
})

OPSELECT_BUTTON.forEach(OPSELECT_BUTTON => {
    OPSELECT_BUTTON.addEventListener('click', () => {
        calculator.chooseOperation(OPSELECT_BUTTON.innerText);
        calculator.updateDisplay();
    })
})

EQUALSELECT_BUTTON.addEventListener('click', () => {
    calculator.operate(EQUALSELECT_BUTTON.innerText);
    calculator.updateDisplay();
})

CLEARSELECT_BUTTON.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})

DELETESELECT_BUTTON.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})