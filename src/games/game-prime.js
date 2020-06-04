import random from 'lodash/random.js';
import runEngine from '../game-engine.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const genRoundData = () => {
  const question = random(0, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return { question, answer };
};

const playGamePrime = () => {
  runEngine(gameRule, genRoundData);
};

export default playGamePrime;
