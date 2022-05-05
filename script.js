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
  display.innerText = displayValue;
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
  storedValue2 = Number(displayValue);
  var result = operate(operator, storedValue1, storedValue2)
  console.log(result);
  displayValue = result;
  display.innerText = result;
}

document.getElementById('equals').addEventListener('click', equals);
document.getElementById('add').addEventListener('click', selectAdd);
document.getElementById('subtract').addEventListener('click', selectSubtract);
document.getElementById('multiply').addEventListener('click', selectMultiply);






