/**
 * @jest-environment jsdom
 */

import { fireEvent } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { setupCalculatorTest } from "../utils_test/utils_test.js";

describe("Calculator Integration & System Tests about sum", () => {
  let display;
  let getButton;

  beforeEach(() => {
    // Usa a função modularizada para configurar a calculadora
    const setup = setupCalculatorTest();
    display = setup.display;
    getButton = setup.getButton;
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
    fireEvent.click(getButton("DEL"));
    fireEvent.click(getButton("3"));
    fireEvent.click(getButton("="));
    expect(display.value).toBe("4");
  });

  test("1 + 2 CE 5 + 5 = should display 10", () => {
    fireEvent.click(getButton("1"));
    fireEvent.click(getButton("+"));
    fireEvent.click(getButton("2"));
    fireEvent.click(getButton("CE"));
    fireEvent.click(getButton("5"));
    fireEvent.click(getButton("+"));
    fireEvent.click(getButton("5"));
    fireEvent.click(getButton("="));
    expect(display.value).toBe("10");
  });

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

  test("1 + = should handle error or stay stable", () => {
    fireEvent.click(getButton("1"));
    fireEvent.click(getButton("+"));
    fireEvent.click(getButton("="));
    expect(display.value).toBe("Erro");
  });

  test("3 + 4 = then + 5 = should display 12", () => {
    fireEvent.click(getButton("3"));
    fireEvent.click(getButton("+"));
    fireEvent.click(getButton("4"));
    fireEvent.click(getButton("="));
    expect(display.value).toBe("7");

    fireEvent.click(getButton("+"));
    fireEvent.click(getButton("5"));
    fireEvent.click(getButton("="));
    expect(display.value).toBe("12");
  });
});
