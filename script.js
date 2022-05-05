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

function clearDisplay() {
  displayValue = 0;
  storedValue1 = 0;
  storedValue2 = 0;
  operator = 0;
  display.innerText = displayValue;
}

const display = document.getElementById("display");
display.innerText = displayValue;

function updateDisplay(input) {
  console.log(input);
  displayValue += input;
}

function saveValue1() {
  storedValue1 = Number(displayValue);
  displayValue = 0;
}

function selectAdd() {
  operator = add;
  saveValue1();
}

function selectSubtract() {
  operator = subtract;
  saveValue1();
}

function selectMultiply() {
  operator = multiply;
  saveValue1();
}

function equals() {

}

// document.getElementById('equals').addEventListener('click', equals);
// document.getElementById('add').addEventListener('click', selectAdd);
// document.getElementById('subtract').addEventListener('click', selectSubtract);
// document.getElementById('multiply').addEventListener('click', selectMultiply);
// document.getElementById('log').addEventListener('click', logArray);
// document.getElementById('execute').addEventListener('click', execute);

var operators = [divide, add, subtract];
var totalNumbers = [27, 8, 43, 6];

for (let i = operators.length - 1 ; i >= 0; i--) {

var tempNumbers = [totalNumbers[0], totalNumbers[1]];
var tempOperator = operators[0];
var tempResult = tempNumbers.reduce(tempOperator);
operators.shift();
totalNumbers.splice(0, 2, tempResult);
}

console.log(totalNumbers[0]);

















