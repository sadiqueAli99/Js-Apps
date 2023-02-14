const calculator = document.getElementById("calculator");
const expression = document.getElementById("expression");
const buttons = calculator.getElementsByTagName("button");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", updateExpression);
}

clearButton.addEventListener("click", clearExpression);
equalsButton.addEventListener("click", calculateResult);

function updateExpression(event) {
  expression.value += event.target.innerText;
}

function clearExpression() {
  expression.value = "";
}

function calculateResult() {
  const result = eval(expression.value);
  expression.value = result;
}
