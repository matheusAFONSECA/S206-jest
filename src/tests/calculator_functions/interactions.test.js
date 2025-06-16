/**
 * @jest-environment jsdom
 */

import { fireEvent } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { setupCalculatorTest } from "../utils_test/utils_test.js";

describe("Calculator Integration & System Tests about random interactions", () => {
  let display;
  let getButton;

  beforeEach(() => {
    // Usa a função modularizada para configurar a calculadora
    const setup = setupCalculatorTest();
    display = setup.display;
    getButton = setup.getButton;
  });


    test("-4- should display Erro", () => {
    fireEvent.click(getButton("-"));
    fireEvent.click(getButton("4"));
    fireEvent.click(getButton("-"));
    fireEvent.click(getButton("="));
    expect(display.value).toBe("Erro");
  });

    test("After calculating, typing a new number should restart the expression", () => {
    fireEvent.click(getButton("1"));
    fireEvent.click(getButton("-"));
    fireEvent.click(getButton("2"));
    fireEvent.click(getButton("="));
    expect(display.value).toBe("-1");

    fireEvent.click(getButton("4")); 
    expect(display.value).toBe("4"); 
   });

    test("After calculating, pressing an operator reuses the answer", () => {
    fireEvent.click(getButton("5"));
    fireEvent.click(getButton("+"));
    fireEvent.click(getButton("5"));
    fireEvent.click(getButton("="));
    expect(display.value).toBe("10");

    fireEvent.click(getButton("+")); 
    fireEvent.click(getButton("5"));
    fireEvent.click(getButton("="));
    expect(display.value).toBe("15");
   });

  test("Should replace the previous operator if two are entered in sequence", () => {
    fireEvent.click(getButton("8"));
    fireEvent.click(getButton("+"));
    fireEvent.click(getButton("×")); 
    fireEvent.click(getButton("2"));
    fireEvent.click(getButton("="));
    expect(display.value).toBe("16"); 
  });


});