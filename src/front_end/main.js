import { calculateExpression, isOperator } from "../utils/utils.js";

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let justCalculated = false;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "=") {
      currentInput = calculateExpression(currentInput).toString();
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

    if (!isOperator(value)) {
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
