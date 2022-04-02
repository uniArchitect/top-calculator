const numbers = [...Array(10).keys()];
//Array() - Creates an array to the 'argument' length, in this case '10'
// .keys() - Returns an array of an object in the same order a normal loop would 

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
