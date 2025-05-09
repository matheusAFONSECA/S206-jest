/**
 * Utilitário para simular a interface da calculadora
 * Cria o DOM e inicializa a lógica da calculadora
 */

import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { initCalculator } from "../../modules/initCalculator.js";
import { calculateExpression, isOperator } from "../../utils/utils.js";

// Resolve o caminho do arquivo HTML
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const htmlPath = resolve(__dirname, "calculator.html");

// Lê o conteúdo do HTML
const calculatorHTML = readFileSync(htmlPath, "utf8");

/**
 * Cria e inicializa a calculadora no DOM para os testes.
 * @returns {Object} - display (input) e getButton (função para pegar botões)
*/
export function setupCalculatorTest() {
  document.body.innerHTML = calculatorHTML;

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
