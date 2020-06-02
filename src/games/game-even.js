import random from 'lodash/random.js';
import playGame from '../game-engine.js';


const minGuessedNumber = 1;
const maxGuessedNumber = 100;

const isEven = (number) => number % 2 === 0;

const taskGenerator = () => {
  const question = random(minGuessedNumber, maxGuessedNumber);
  const answer = isEven(question) ? 'yes' : 'no';
  return { question, answer };
};

const playEvenGame = () => {
  playGame(
    'Answer "yes" if the number is even, otherwise answer "no".',
    taskGenerator,
  );
};

export default playEvenGame;
