import { playGame } from '../game-engine.js';
import { getRandomNumber } from '../shared.js';

const operations = {
  0: '-',
  1: '+',
  2: '*',
};

const getRandomOperation = () => {
  const operationCount = Object.keys(operations).length;
  const operationNumber = getRandomNumber(operationCount - 1);
  return operations[operationNumber];
};

const getRandomArithmeticExpression = () => `${getRandomNumber()} ${getRandomOperation()} ${getRandomNumber()}`;

const evaluateExpression = (expression) => {
  const parts = expression.split(' ');
  const firstNumber = Number(parts[0]);
  const operation = parts[1];
  const secondNumber = Number(parts[2]);
  switch (operation) {
    case '+':
      return String(firstNumber + secondNumber);
    case '-':
      return String(firstNumber - secondNumber);
    case '*':
      return String(firstNumber * secondNumber);
    default:
      return '!!!Wrong operation!!!';
  }
};

const playCalcGame = () => {
  playGame({
    rule: 'What is the result of the expression?',
    questionGenerator: getRandomArithmeticExpression,
    answerGenerator: evaluateExpression,
  });
};

export default playCalcGame;
