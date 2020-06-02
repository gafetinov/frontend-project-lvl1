import random from 'lodash/random.js';
import playGame from '../game-engine.js';


const minGuessedNumber = 1;
const maxGuessedNumber = 100;

const findDivisors = (number) => {
  const dividers = [1, number];
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) dividers.push(i);
  }
  return dividers;
};

const intersect = (arrA, arrB) => arrA.filter((el) => arrB.includes(el));

const getGcd = (x, y) => Math.max(...intersect(findDivisors(x), findDivisors(y)));

const gcdTaskGenerator = () => {
  const firstNumber = random(minGuessedNumber, maxGuessedNumber);
  const secondNumber = random(minGuessedNumber, maxGuessedNumber);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = String(getGcd(firstNumber, secondNumber));
  return { question, answer };
};

const playGcdGame = () => {
  playGame(
    'Find the greatest common divisor of given numbers.',
    gcdTaskGenerator,
  );
};

export default playGcdGame;
