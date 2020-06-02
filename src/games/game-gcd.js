import playGame from '../game-engine.js';
import getRandomNumber from './shared.js';

const getTwoRandomNumbers = () => `${getRandomNumber()} ${getRandomNumber()}`;

const findDividors = (number) => {
  const dividers = [1, number];
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) dividers.push(i);
  }
  return dividers;
};

const intersect = (arrA, arrB) => arrA.filter((el) => arrB.includes(el));

const getGcd = (x, y) => Math.max(...intersect(findDividors(x), findDividors(y)));

const answerGenerator = (expression) => {
  const parts = expression.split(' ');
  const firstNumber = parts[0];
  const secondNumber = parts[1];
  return String(getGcd(firstNumber, secondNumber));
};

const taskGenerator = () => {
  const question = getTwoRandomNumbers();
  const answer = answerGenerator(question);
  return { question, answer };
};

const playGcdGame = () => {
  playGame(
    'Find the greatest common divisor of given numbers.',
    taskGenerator,
  );
};

export default playGcdGame;
