import playGame from '../game-engine.js';
import getRandomNumber from './shared.js';

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const taskGenerator = () => {
  const question = getRandomNumber();
  const answer = isPrime(question) ? 'yes' : 'no';
  return { question, answer };
};

const playGamePrime = () => {
  playGame(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    taskGenerator,
  );
};

export default playGamePrime;
