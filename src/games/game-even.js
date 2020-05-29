import { playGame } from '../game-engine.js';
import { getRandomNumber } from '../shared';

const isEven = (number) => number % 2 === 0;

const getRightAnswer = (question) => (isEven(question) ? 'yes' : 'no');

const playEvenGame = () => {
  playGame({
    rule: 'Answer "yes" if the number is even, otherwise answer "no".',
    questionGenerator: getRandomNumber,
    answerGenerator: getRightAnswer,
  });
};

export default playEvenGame;
