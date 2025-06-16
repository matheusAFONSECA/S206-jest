/**
 * @jest-environment jsdom
 */
import { calculateExpression, isOperator } from '../../utils/utils.js';

describe('isOperator()', () => {
  it('reconhece + - * / como operadores válidos', () => {
    ['+', '-', '*', '/'].forEach(op => {
      expect(isOperator(op)).toBe(true);
    });
  });

  it('não reconhece × ou ÷ nem caracteres não-operator', () => {
    expect(isOperator('×')).toBe(false);
    expect(isOperator('÷')).toBe(false);
    expect(isOperator('a')).toBe(false);
    expect(isOperator('')).toBe(false);
  });
});

describe('calculateExpression()', () => {
  it('2+3*4 deve ser 14 (precedência)', () => {
    expect(calculateExpression('2+3*4')).toBe(14);
  });

  it('(2+3)*4 deve ser 20 (parênteses)', () => {
    expect(calculateExpression('(2+3)*4')).toBe(20);
  });

  it('7/2 deve ser 3.5 (decimal)', () => {
    expect(calculateExpression('7/2')).toBeCloseTo(3.5);
  });

  it('sintaxe inválida retorna "Erro"', () => {
    expect(calculateExpression('1++2')).toBe('Erro');
    expect(calculateExpression('')).toBeUndefined();
  });
});
