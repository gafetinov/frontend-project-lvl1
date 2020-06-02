import random from 'lodash/random.js';
import playGame from '../game-engine.js';


const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));

const gcdTaskGenerator = () => {
  const firstNumber = random(0, 100);
  const secondNumber = random(0, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = String(gcd(firstNumber, secondNumber));
  return { question, answer };
};

const playGcdGame = () => {
  playGame(
    'Find the greatest common divisor of given numbers.',
    gcdTaskGenerator,
  );
};

export default playGcdGame;
