import { playGame } from '../game-engine.js';
import getRandomNumber from './shared.js';

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const answerGenerator = (number) => (isPrime(number) ? 'yes' : 'no');

const playGamePrime = () => {
  playGame({
    rule: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    questionGenerator: getRandomNumber,
    answerGenerator,
  });
};

export default playGamePrime;
