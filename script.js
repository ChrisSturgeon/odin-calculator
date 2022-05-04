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

function selectOperator(input) {
  operator = input;
  storedValue1 = Number(displayValue);
  console.log(`Selected operator: ${operator}`);
  console.log(`Stored value 1: ${storedValue1}`);
  displayValue = 0;
  console.log(`Display Value now ${displayValue}`);
}

function greet() {
  console.log("Hello")
}

function equals() {
  storedValue2 = Number(displayValue);
  if (operator === "add") {
    console.log(operate(add, storedValue1, storedValue2));
  }
  console.log(`Stored value 1 : ${storedValue1}`)
  console.log(`Stored value 2: ${storedValue2}`);
  console.log(`Operator: ${typeof(operator)}`);
  // console.log(operate(operator, storedValue1, storedValue2));

}

console.log(operate(add, 2 , 5));

console.log(typeof(add(2 ,4)));





