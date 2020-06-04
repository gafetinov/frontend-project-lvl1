import random from 'lodash/random.js';
import runEngine from '../game-engine.js';

const gameRule = 'What number is missing in the progression?';
const missingTermSign = '..';

const getProgression = (first, diff, length = 0) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(first + i * diff);
  }
  return progression;
};

const genRoundData = () => {
  const progression = getProgression(random(0, 100), random(1, 20), random(3, 10));
  const missingIndex = random(0, progression.length - 1);
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
