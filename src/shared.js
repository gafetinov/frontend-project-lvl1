import random from 'lodash/random.js';

export const QUESTION_COUNT = 3;

export const getRandomNumber = (n = 100) => random(0, n);
