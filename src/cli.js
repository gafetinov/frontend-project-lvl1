import readlineSync from 'readline-sync';
import random from 'lodash/random.js';

let USER_NAME;

const isEven = (number) => number % 2 === 0;

const tellRule = (rule) => {
  console.log(rule);
};

const verdict = (correctAnswer, userAnswer) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    console.log(`Let's try again, ${USER_NAME}!`);
    process.exit();
  }
};

const getAnswerToQuestion = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};

const askQuestions = (questionGenerator, responseGenerator, questionCount) => {
  for (let i = 0; i < questionCount; i += 1) {
    const question = questionGenerator();
    const userAnswer = getAnswerToQuestion(question);
    const correctAnswer = responseGenerator(question);
    verdict(correctAnswer, userAnswer);
  }
};

const congratulate = () => {
  console.log(`Congratulations, ${USER_NAME}!`);
};

export const greet = () => {
  console.log('Welcome to the Brain Games!');
  USER_NAME = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${USER_NAME}!`);
};

export const playEvenGame = () => {
  greet();
  tellRule('Answer "yes" if the number is even, otherwise answer "no".');
  askQuestions(
    () => random(0, 100),
    (question) => (isEven(question) ? 'yes' : 'no'),
    3,
  );
  congratulate();
};
