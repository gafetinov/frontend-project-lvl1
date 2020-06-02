import random from 'lodash/random.js';
import playGame from '../game-engine.js';


const operations = {
  0: '-',
  1: '+',
  2: '*',
};

const getRandomOperation = () => {
  const operationCount = Object.keys(operations).length;
  const operationNumber = random(0, operationCount - 1);
  return operations[operationNumber];
};

const calculateExpression = (firstNumber, secondNumber, operation) => {
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

const arithmeticTaskGenerator = () => {
  const firstNumber = random(0, 50);
  const secondNumber = random(0, 50);
  const operation = getRandomOperation();
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const answer = calculateExpression(firstNumber, secondNumber, operation);
  return { question, answer };
};

const playCalcGame = () => {
  playGame('What is the result of the expression?', arithmeticTaskGenerator);
};

export default playCalcGame;
