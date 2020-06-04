import random from 'lodash/random.js';
import runEngine from '../game-engine.js';


const gameRule = 'Find the greatest common divisor of given numbers.';

const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));

const genRoundData = () => {
  const firstNumber = random(0, 100);
  const secondNumber = random(0, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = String(gcd(firstNumber, secondNumber));
  return { question, answer };
};

const playGcdGame = () => {
  runEngine(gameRule, genRoundData);
};

export default playGcdGame;
