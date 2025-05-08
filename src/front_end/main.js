import { calculateExpression, isOperator } from "../utils/utils.js";

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "=") {
      currentInput = calculateExpression(currentInput).toString();
    } else if (value === "DEL") {
      currentInput = currentInput.slice(0, -1);
    } else if (value === "CE") {
      currentInput = "";
    } else {
      const lastChar = currentInput.slice(-1);
      if (isOperator(lastChar) && isOperator(value)) return;
      currentInput += value;
    }

    display.value = currentInput || "0";
  });
});
