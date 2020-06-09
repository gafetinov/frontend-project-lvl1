import random from 'lodash/random.js';
import runEngine from '../game-engine.js';


const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const genRoundData = () => {
  const number = random(0, 100);
  const question = String(number);
  const answer = isEven(number) ? 'yes' : 'no';
  return { question, answer };
};

const playEvenGame = () => {
  runEngine(gameRule, genRoundData);
};

export default playEvenGame;
