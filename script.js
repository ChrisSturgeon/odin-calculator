// Opearand functions
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

// Create arrays and initial conditions, one array to store operands
// another array to store operators
var displayValue = "";
var operators = [];
var totalNumbers = [];
const display = document.getElementById("display");

// Clear inputs
function clear() {
  displayValue = "";
  display.innerText = "0";
  operators = [];
  totalNumbers = [];
}

function updateDisplay(input) {
  displayValue += input;
  display.innerText = displayValue;
}

// Button functions
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

function percentage () {
  displayValue *= 0.01;
  display.innerText = displayValue;
}

function backSpace() {
  displayValue.slice(displayValue.length - 1, 1);
  displayValue = 0;
  display.innerText = displayValue;
}

function equals() {

  // Add last number to array to complete number/operator/number trio. 
  addNumber();

  // Check there's one more operand than operator before executing loop.
  // Loop takes first two operads from numbers array, and computes them using
  // first operator (i.e. number/operator/number trio). 
  // Result is spliced into beginning of numbers array, replacing originals.
  // Used operator is removed from array. 
  // Repeat until no more operators remaining. 

  if (totalNumbers.length - operators.length === 1) {
    for (let i = operators.length - 1 ; i >= 0; i--) {
      var tempNumbers = [totalNumbers[0], totalNumbers[1]];
      var tempOperator = operators[0];
      var tempResult = tempNumbers.reduce(tempOperator);
      operators.shift();
      totalNumbers.splice(0, 2, tempResult);
      display.innerText = totalNumbers;
    }
  }
}

// Add Button Event Listeners
document.getElementById('clear').addEventListener('click', clear);
document.getElementById('equals').addEventListener('click', equals);
document.getElementById('add').addEventListener('click', selectAdd);
document.getElementById('subtract').addEventListener('click', selectSubtract);
document.getElementById('multiply').addEventListener('click', selectMultiply);
document.getElementById('divide').addEventListener('click', selectDivide);
document.getElementById('percentage').addEventListener('click', percentage);
document.getElementById('invert').addEventListener('click', invert);
document.getElementById('backspace').addEventListener('click', backSpace);


// Keyboard Input  
document.addEventListener("keypress", (event) => {
  var name = event.key;

  switch (name) {
    case "+":
      selectAdd();
      break;
    case "-":
      selectSubtract();
      break;
    case "*":
      selectMultiply();
      break;
    case "/":
      selectDivide();
      break;
    case "=":
      equals();
      break;
    case "Enter":
      equals();
      break;
    default: 
      displayValue += name;
      display.innerText = displayValue
  }
});



















