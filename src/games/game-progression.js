import random from 'lodash/random.js';
import playGame from '../game-engine.js';

const missingTermSign = '..';
const minDifference = 1;
const maxDifference = 20;
const progressionLength = 10;
const minFirstTerm = 0;
const maxFirstTerm = 100;

const generateProgression = (length = 0) => {
  const progression = [];
  let currentTerm = random(minFirstTerm, maxFirstTerm);
  const difference = random(minDifference, maxDifference);
  for (let i = 0; i < length; i += 1) {
    progression.push(currentTerm += difference);
  }
  return progression;
};

const progressionTaskGenerator = () => {
  const progression = generateProgression(progressionLength);
  const missingIndex = random(0, progressionLength - 1);
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
