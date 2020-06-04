import random from 'lodash/random.js';
import runEngine from '../game-engine.js';

const gameRule = 'What number is missing in the progression?';
const missingTermSign = '..';
const progressionLength = 10;

const generateProgression = (length = 0) => {
  const progression = [];
  let currentTerm = random(0, 100);
  const difference = random(1, 20);
  for (let i = 0; i < length; i += 1) {
    progression.push(currentTerm += difference);
  }
  return progression;
};

const genRoundData = () => {
  const progression = generateProgression(progressionLength);
  const missingIndex = random(0, progressionLength - 1);
  const missingTerm = progression[missingIndex];
  progression[missingIndex] = missingTermSign;
  const question = progression.join(' ');
  const answer = String(missingTerm);
  return { question, answer };
};

const playGameProgression = () => {
  runEngine(gameRule, genRoundData);
};

export default playGameProgression;
