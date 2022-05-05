// Define operational functions

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// Define operate function. 

function operate(operation, a, b) {
  return operation(a, b);
}

var displayValue = "";
var storedValue1 = 0;
var operator;
var storedValue2 = 0;
var inputArray = [];

// Clear inputs

function clear() {
  displayValue = "";
  display.innerText = "0";
  operators = [];
  totalNumbers = [];
  
}


const display = document.getElementById("display");


function updateDisplay(input) {
  displayValue += input;
  display.innerText = displayValue;
}

function addNumber() {
  if (displayValue.length != 0 && displayValue != "0") {
    totalNumbers.push(Number(displayValue));
    displayValue = "";
  }
}

function selectAdd() {
  addNumber();
  operators.push(add);
}

function selectSubtract() {
  addNumber();
  operators.push(subtract);
}

function selectMultiply() {
  addNumber();
  operators.push(multiply);
}

function selectDivide() {
  addNumber();
  operators.push(divide);
}

function invert() {
  displayValue *= -1;
  display.innerText = displayValue;
}

document.getElementById('clear').addEventListener('click', clear);
document.getElementById('equals').addEventListener('click', equals);
document.getElementById('add').addEventListener('click', selectAdd);
document.getElementById('subtract').addEventListener('click', selectSubtract);
document.getElementById('multiply').addEventListener('click', selectMultiply);
document.getElementById('divide').addEventListener('click', selectDivide);
document.getElementById('invert').addEventListener('click', invert);

var operators = [];
var totalNumbers = [];

function equals() {
  addNumber();

  console.log("--- Inputs ---")
  console.log(`totalNumbers: ${totalNumbers}`);
  console.log(`Operators: ${operators}`);
  console.log(`Display Value: ${displayValue}`);
  
  if (totalNumbers.length - operators.length === 1) {

    for (let i = operators.length - 1 ; i >= 0; i--) {
      var tempNumbers = [totalNumbers[0], totalNumbers[1]];
      var tempOperator = operators[0];
      var tempResult = tempNumbers.reduce(tempOperator);
      operators.shift();
      totalNumbers.splice(0, 2, tempResult);
      display.innerText = totalNumbers;
    }
    console.log("--- First ---")
    console.log(`Answer is ${totalNumbers}`);
    console.log(`totalNumbers: ${totalNumbers}`);
    console.log(`Operators: ${operators}`);
    console.log(`Display Value: ${displayValue}`);
    
  }
}



















