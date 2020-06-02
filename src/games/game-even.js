import playGame from '../game-engine.js';
import getRandomNumber from './shared.js';

const isEven = (number) => number % 2 === 0;

const taskGenerator = () => {
  const question = getRandomNumber();
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
