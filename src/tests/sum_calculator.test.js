/**
 * @jest-environment jsdom
 */

import { fireEvent } from "@testing-library/dom";
import { initCalculator } from "../modules/initCalculator.js";
import { calculateExpression, isOperator } from "../utils/utils.js";
import "@testing-library/jest-dom";

describe("Calculator Integration & System Tests", () => {
  let display;
  let getButton;

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="calculator">
        <input type="text" class="display" value="0" disabled />
        <div class="buttons">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button class="operator">+</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button class="operator">-</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button class="operator">×</button>
          <button>(</button>
          <button>0</button>
          <button>)</button>
          <button class="operator">÷</button>
          <button class="del">DEL</button>
          <button class="ce">CE</button>
          <button class="equal">=</button>
        </div>
      </div>
    `;

    // Inicializa a calculadora para cada teste
    initCalculator(calculateExpression, isOperator);

    display = document.querySelector(".display");
    getButton = (text) =>
      Array.from(document.querySelectorAll("button")).find(
        (btn) => btn.textContent === text
      );
  });

  test("1 + 2 = should display 3", () => {
    fireEvent.click(getButton("1"));
    fireEvent.click(getButton("+"));
    fireEvent.click(getButton("2"));
    fireEvent.click(getButton("="));
    expect(display.value).toBe("3");
  });

  test("5 + 0 = should display 5", () => {
    fireEvent.click(getButton("5"));
    fireEvent.click(getButton("+"));
    fireEvent.click(getButton("0"));
    fireEvent.click(getButton("="));
    expect(display.value).toBe("5");
  });

  test("3 + 4 + 5 = should display 12", () => {
    fireEvent.click(getButton("3"));
    fireEvent.click(getButton("+"));
    fireEvent.click(getButton("4"));
    fireEvent.click(getButton("+"));
    fireEvent.click(getButton("5"));
    fireEvent.click(getButton("="));
    expect(display.value).toBe("12");
  });

  test("1 + 2 DEL 3 = should display 4", () => {
    fireEvent.click(getButton("1"));
    fireEvent.click(getButton("+"));
    fireEvent.click(getButton("2"));
    fireEvent.click(getButton("DEL")); // apaga o 2
    fireEvent.click(getButton("3"));
    fireEvent.click(getButton("="));
    expect(display.value).toBe("4");
  });

  test("1 + 2 CE 5 + 5 = should display 10", () => {
    fireEvent.click(getButton("1"));
    fireEvent.click(getButton("+"));
    fireEvent.click(getButton("2"));
    fireEvent.click(getButton("CE")); // limpa tudo
    fireEvent.click(getButton("5"));
    fireEvent.click(getButton("+"));
    fireEvent.click(getButton("5"));
    fireEvent.click(getButton("="));
    expect(display.value).toBe("10");
  });

  // ✅ Teste com parênteses (3 + 4) + 2 = 9
  test("( 3 + 4 ) + 2 = should display 9", () => {
    fireEvent.click(getButton("("));
    fireEvent.click(getButton("3"));
    fireEvent.click(getButton("+"));
    fireEvent.click(getButton("4"));
    fireEvent.click(getButton(")"));
    fireEvent.click(getButton("+"));
    fireEvent.click(getButton("2"));
    fireEvent.click(getButton("="));
    expect(display.value).toBe("9");
  });

  // ✅ Teste operação inválida (1 + =)
  test("1 + = should handle error or stay stable", () => {
    fireEvent.click(getButton("1"));
    fireEvent.click(getButton("+"));
    fireEvent.click(getButton("="));
    // Pode mostrar 'Erro' ou algo neutro dependendo de sua função
    expect(display.value).not.toBe("");  // Verifica que não quebrou
  });

  // ✅ Teste operação encadeada após =
  test("3 + 4 = then + 5 = should display 12", () => {
    fireEvent.click(getButton("3"));
    fireEvent.click(getButton("+"));
    fireEvent.click(getButton("4"));
    fireEvent.click(getButton("=")); // agora 7
    expect(display.value).toBe("7");

    fireEvent.click(getButton("+"));
    fireEvent.click(getButton("5"));
    fireEvent.click(getButton("="));
    expect(display.value).toBe("12");
  });
});
