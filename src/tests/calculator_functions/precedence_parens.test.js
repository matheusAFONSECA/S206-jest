/**
 * @jest-environment jsdom
 */
import { fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { setupCalculatorTest } from '../utils_test/utils_test.js';

describe('Precedência e parênteses na interface', () => {
  let display, getButton;
  beforeEach(() => {
    ({ display, getButton } = setupCalculatorTest());
  });

  test('2 + 3 × 4 = 14', () => {
    fireEvent.click(getButton('2'));
    fireEvent.click(getButton('+'));
    fireEvent.click(getButton('3'));
    fireEvent.click(getButton('×'));
    fireEvent.click(getButton('4'));
    fireEvent.click(getButton('='));
    expect(display.value).toBe('14');
  });

  test('( 2 + 3 ) × 4 = 20', () => {
    fireEvent.click(getButton('('));
    fireEvent.click(getButton('2'));
    fireEvent.click(getButton('+'));
    fireEvent.click(getButton('3'));
    fireEvent.click(getButton(')'));
    fireEvent.click(getButton('×'));
    fireEvent.click(getButton('4'));
    fireEvent.click(getButton('='));
    expect(display.value).toBe('20');
  });
});
