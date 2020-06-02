import playGame from '../game-engine.js';
import getRandomNumber from './shared.js';

const missingTermSign = '..';
const maxDifference = 20;
const progressionLength = 10;

const generateProgression = (length = 0) => {
  const progression = [];
  let currentTerm = getRandomNumber();
  const difference = getRandomNumber(maxDifference);
  for (let i = 0; i < length; i += 1) {
    progression.push(currentTerm += difference);
  }
  return progression;
};

const progressionTaskGenerator = () => {
  const progression = generateProgression(progressionLength);
  const missingIndex = getRandomNumber(progressionLength - 1);
  const missingTerm = progression[missingIndex];
  progression[missingIndex] = missingTermSign;
  const question = progression.join(' ');
  const answer = String(missingTerm);
  return { question, answer };
};

const playGameProgression = () => {
  playGame(
    'What number is missing in the progression?',
    progressionTaskGenerator,
  );
};

export default playGameProgression;
