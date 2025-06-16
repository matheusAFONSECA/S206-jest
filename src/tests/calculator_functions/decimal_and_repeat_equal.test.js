/**
 * @jest-environment jsdom
 */
import { fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { setupCalculatorTest } from '../utils_test/utils_test.js';

describe('Fluxos especiais na UI', () => {
  let display, getButton;
  beforeEach(() => {
    ({ display, getButton } = setupCalculatorTest());
  });

  test('pressionar = duas vezes mantém o resultado', () => {
    fireEvent.click(getButton('3'));
    fireEvent.click(getButton('+'));
    fireEvent.click(getButton('4'));
    fireEvent.click(getButton('='));
    expect(display.value).toBe('7');
    fireEvent.click(getButton('='));
    expect(display.value).toBe('7');
  });

  test('pressionar = no início não altera display', () => {
    fireEvent.click(getButton('='));
    expect(display.value).toBe('0');
  });
});
