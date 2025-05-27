export function initCalculator(calculateExpression, isOperator) {
  const display = document.querySelector(".display");
  const buttons = document.querySelectorAll("button");

  let currentInput = "";
  let justCalculated = false;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      let value = btn.textContent;

      if (value === "=") {
        const expression = currentInput.replace(/×/g, "*").replace(/÷/g, "/");
        if (expression.trim() === "") return;
        currentInput = calculateExpression(expression).toString();
        display.value = currentInput;
        justCalculated = true;
        return;
      }

      if (value === "DEL") {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput || "0";
        return;
      }

      if (value === "CE") {
        currentInput = "";
        display.value = "0";
        return;
      }

      if (value === "(" || value === ")") {
        if (justCalculated) justCalculated = false;
        currentInput += value;
        display.value = currentInput;
        return;
      }

      if (!isNaN(value)) {
        if (justCalculated) {
          currentInput = "";
          justCalculated = false;
        }
        currentInput += value;
      } else {
        const lastChar = currentInput.slice(-1);
        if (isOperator(lastChar)) {
          currentInput = currentInput.slice(0, -1);
        } else if (justCalculated) {
          justCalculated = false;
        }
        currentInput += value;
      }

      display.value = currentInput || "0";
    });
  });
}
