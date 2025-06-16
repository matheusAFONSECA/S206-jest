/**
 * @jest-environment jsdom
 */

import { fireEvent } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { setupCalculatorTest } from "../utils_test/utils_test.js";

describe('Testes de tratamento de erros na calculadora', () => {
    let display;
    let getButton;

    beforeEach(() => {
        const setup = setupCalculatorTest();
        display = setup.display;
        getButton = setup.getButton;
    });

    test("Expressão incompleta (1 + =) deve exibir erro", () => {
        fireEvent.click(getButton("1"));
        fireEvent.click(getButton("+"));
        fireEvent.click(getButton("="));
        expect(display.value.toLowerCase()).toContain("erro");
    });

    test("Divisão por zero (5 / 0 =) deve exibir infinito", () => {
        fireEvent.click(getButton("5"));
        fireEvent.click(getButton("÷"));
        fireEvent.click(getButton("0"));
        fireEvent.click(getButton("="));
        expect(display.value.toLowerCase()).toContain("infinity");
    });

    test("Parênteses não balanceados ( (5 + 2 =) deve exibir erro", () => {
        fireEvent.click(getButton("("));
        fireEvent.click(getButton("5"));
        fireEvent.click(getButton("+"));
        fireEvent.click(getButton("2"));
        fireEvent.click(getButton("="));
        expect(display.value.toLowerCase()).toContain("erro");
    });

    test("Calculadora continua funcionando após erro", () => {
        // Executa expressão inválida
        fireEvent.click(getButton("7"));
        fireEvent.click(getButton("+"));
        fireEvent.click(getButton("="));
        expect(display.value.toLowerCase()).toContain("erro");

        // Limpa e faz nova operação válida
        fireEvent.click(getButton("CE"));
        fireEvent.click(getButton("2"));
        fireEvent.click(getButton("+"));
        fireEvent.click(getButton("3"));
        fireEvent.click(getButton("="));
        expect(display.value).toBe("5");
    });

    test("Expressão estranha (++2 =) deve exibir apenas o número", () => {
        fireEvent.click(getButton("+"));
        fireEvent.click(getButton("+"));
        fireEvent.click(getButton("2"));
        fireEvent.click(getButton("="));
        expect(display.value.toLowerCase()).toContain("2");
    });
});
