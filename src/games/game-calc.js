import random from 'lodash/random.js';
import runEngine from '../game-engine.js';


const gameRule = 'What is the result of the expression?';
const operations = ['-', '+', '*'];

const getRandomOperation = () => {
  const operationNumber = random(0, operations.length - 1);
  return operations[operationNumber];
};

const calculate = (firstNumber, secondNumber, operation) => {
  switch (operation) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return '!!!Wrong operation!!!';
  }
};

const genRoundData = () => {
  const firstNumber = random(0, 50);
  const secondNumber = random(0, 50);
  const operation = getRandomOperation();
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const answer = String(calculate(firstNumber, secondNumber, operation));
  return { question, answer };
};

const playCalcGame = () => {
  runEngine(gameRule, genRoundData);
};

export default playCalcGame;
