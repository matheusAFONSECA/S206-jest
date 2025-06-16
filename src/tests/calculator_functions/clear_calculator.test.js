/**
 * @jest-environment jsdom
 */

import { fireEvent } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { setupCalculatorTest } from "../utils_test/utils_test.js";

describe("Calculator Integration & System Tests about DEL and CE", () => {
  let display;
  let getButton;

  beforeEach(() => {
    const setup = setupCalculatorTest();
    display = setup.display;
    getButton = setup.getButton;
    console.log("Display:", display);
    console.log("Get Button:", getButton);
  });
  // --- Tests for the DEL function ---
  describe("DEL button functionality", () => {
    test("Should delete the last digit of a number", () => {
      fireEvent.click(getButton("1"));
      fireEvent.click(getButton("2"));
      fireEvent.click(getButton("3"));
      expect(display.value).toBe("123");

      fireEvent.click(getButton("DEL"));
      expect(display.value).toBe("12");

      fireEvent.click(getButton("DEL"));
      expect(display.value).toBe("1");
    });

    test("Should delete an operator", () => {
      fireEvent.click(getButton("5"));
      fireEvent.click(getButton("+"));
      expect(display.value).toBe("5+");

      fireEvent.click(getButton("DEL"));
      expect(display.value).toBe("5");
    });

    test("Using DEL after a calculation should clear the display for a new number", () => {
      fireEvent.click(getButton("9"));
      fireEvent.click(getButton("-"));
      fireEvent.click(getButton("4"));
      fireEvent.click(getButton("="));
      expect(display.value).toBe("5");

      fireEvent.click(getButton("DEL"));
      expect(display.value).toBe("0");
    });
  });

  // --- Tests for the CE function ---
  describe("CE (Clear All) button functionality", () => {
    test("Should clear the entire operation and display 0", () => {
      fireEvent.click(getButton("1"));
      fireEvent.click(getButton("0"));
      fireEvent.click(getButton("+"));
      fireEvent.click(getButton("5"));
      expect(display.value).toBe("10+5");

      fireEvent.click(getButton("CE"));
      expect(display.value).toBe("0");
    });

    test("Should clear the display and show 0 if it's the first number", () => {
      fireEvent.click(getButton("1"));
      fireEvent.click(getButton("2"));
      fireEvent.click(getButton("3"));
      expect(display.value).toBe("123");

      fireEvent.click(getButton("CE"));
      expect(display.value).toBe("0");
    });

    test("Should clear the result and display 0 after a calculation", () => {
      fireEvent.click(getButton("9"));
      fireEvent.click(getButton("-"));
      fireEvent.click(getButton("4"));
      fireEvent.click(getButton("="));
      expect(display.value).toBe("5");

      fireEvent.click(getButton("CE"));
      expect(display.value).toBe("0");

      fireEvent.click(getButton("2"));
      fireEvent.click(getButton("+"));
      fireEvent.click(getButton("2"));
      fireEvent.click(getButton("="));
      expect(display.value).toBe("4");
    });
  });
});
