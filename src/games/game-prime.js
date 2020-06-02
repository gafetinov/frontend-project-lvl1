import random from 'lodash/random.js';
import playGame from '../game-engine.js';


const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const taskGenerator = () => {
  const question = random(0, 100);
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
