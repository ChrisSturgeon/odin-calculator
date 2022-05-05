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

var displayValue = 0;
var storedValue1 = 0;
var operator;
var storedValue2 = 0;
var inputArray = [];

// Clear inputs


const display = document.getElementById("display");
display.innerText = displayValue;

function updateDisplay(input) {
  console.log(input);
  displayValue += input;
}

function addNumber() {
  totalNumbers.push(Number(displayValue));
  console.log(totalNumbers);
  displayValue = 0;
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

document.getElementById('equals').addEventListener('click', equals);
document.getElementById('add').addEventListener('click', selectAdd);
document.getElementById('subtract').addEventListener('click', selectSubtract);
document.getElementById('multiply').addEventListener('click', selectMultiply);
document.getElementById('divide').addEventListener('click', selectDivide);
document.getElementById('execute').addEventListener('click', addNumber);

var operators = [];
var totalNumbers = [];

function equals() {
  addNumber();
  for (let i = operators.length - 1 ; i >= 0; i--) {
    var tempNumbers = [totalNumbers[0], totalNumbers[1]];
    var tempOperator = operators[0];
    var tempResult = tempNumbers.reduce(tempOperator);
    operators.shift();
    totalNumbers.splice(0, 2, tempResult);
  }
  console.log(totalNumbers[0]);

}



















