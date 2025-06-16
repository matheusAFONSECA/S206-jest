/**
 * @jest-environment jsdom
 */

import { fireEvent } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { setupCalculatorTest } from "../utils_test/utils_test.js";

describe("Calculator Integration & System Tests about sub", () => {
  let display;
  let getButton;

  beforeEach(() => {
    // Usa a função modularizada para configurar a calculadora
    const setup = setupCalculatorTest();
    display = setup.display;
    getButton = setup.getButton;
  });

  test("1 - 2 = should display -1", () => {
    fireEvent.click(getButton("1"));
    fireEvent.click(getButton("-"));
    fireEvent.click(getButton("2"));
    fireEvent.click(getButton("="));
    expect(display.value).toBe("-1");
  });

  test("5 - 3 = should display 2", () => {
    fireEvent.click(getButton("5"));
    fireEvent.click(getButton("-"));
    fireEvent.click(getButton("3"));
    fireEvent.click(getButton("="));
    expect(display.value).toBe("2");
  });

  test("3 - 4 - 5 = should display -6", () => {
    fireEvent.click(getButton("3"));
    fireEvent.click(getButton("-"));
    fireEvent.click(getButton("4"));
    fireEvent.click(getButton("-"));
    fireEvent.click(getButton("5"));
    fireEvent.click(getButton("="));
    expect(display.value).toBe("-6");
  });

  test("100 - 100 = should display 0", () => {
    fireEvent.click(getButton("1"));
    fireEvent.click(getButton("0"));
    fireEvent.click(getButton("0"));
    fireEvent.click(getButton("-"));
    fireEvent.click(getButton("1"));
    fireEvent.click(getButton("0"));
    fireEvent.click(getButton("0"));
    fireEvent.click(getButton("="));
    expect(display.value).toBe("0");
  });


});
