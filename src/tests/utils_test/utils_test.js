/**
 * Utilitário para simular a interface da calculadora
 * Cria o DOM e inicializa a lógica da calculadora
 */

import { initCalculator } from "../../modules/initCalculator.js";
import { calculateExpression, isOperator } from "../../utils/utils.js";

/**
 * Cria e inicializa a calculadora no DOM para os testes.
 * @returns {Object} - display (input) e getButton (função para pegar botões)
 */
export function setupCalculatorTest() {
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

  // Inicializa a lógica da calculadora
  initCalculator(calculateExpression, isOperator);

  // Retorna o display e um helper para pegar os botões facilmente
  const display = document.querySelector(".display");
  const getButton = (text) =>
    Array.from(document.querySelectorAll("button")).find(
      (btn) => btn.textContent === text
    );

  return { display, getButton };
}
