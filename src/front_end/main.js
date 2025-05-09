import { calculateExpression, isOperator } from "../utils/utils.js";
import { initCalculator } from "../modules/initCalculator.js";

initCalculator(calculateExpression, isOperator);
