export function calculateExpression(expression) {
    try {
      return eval(expression);
    } catch {
      return "Erro";
    }
  }
  
  export function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
  }
  