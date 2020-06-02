import playGame from '../game-engine.js';
import getRandomNumber from './shared.js';

const missingTerm = '..';
const maxDifference = 20;

const generateProgression = (length = 0) => {
  const progression = [];
  let currentTerm = getRandomNumber();
  const difference = getRandomNumber(maxDifference);
  for (let i = 0; i < length; i += 1) {
    progression.push(currentTerm += difference);
  }
  return progression;
};

const findKnownTerm = (progression, startIndex = 0) => {
  for (let i = startIndex; i < progression.length; i += 1) {
    if (progression[i] !== missingTerm) {
      return Object.freeze({ value: progression[i], index: i });
    }
  }
  return undefined;
};

const findDifference = (progression) => {
  const nearTerm = findKnownTerm(progression);
  const furtherTerm = findKnownTerm(progression, nearTerm.index + 1);
  return (furtherTerm.value - nearTerm.value) / (furtherTerm.index - nearTerm.index);
};

const getTermValue = (searchIndex, difference, knownTerm = { value: 0, index: 0 }) => (
  knownTerm.value - (knownTerm.index - searchIndex) * difference
);

const generateProgressionWithMissingTerm = () => {
  const progressionLength = 10;
  const progression = generateProgression(progressionLength);
  const missingIndex = getRandomNumber(progressionLength - 1);
  progression[missingIndex] = missingTerm;
  return progression.join(' ');
};

const findMissingTerm = (progressionString) => {
  const progression = progressionString.split(' ');
  return getTermValue(
    progression.indexOf(missingTerm), findDifference(progression), findKnownTerm(progression),
  ).toString();
};

const playGameProgression = () => {
  playGame(
    'What number is missing in the progression?',
    generateProgressionWithMissingTerm,
    findMissingTerm,
  );
};

export default playGameProgression;
