import readlineSync from 'readline-sync';
import { QUESTION_COUNT } from './shared';

let USER_NAME;

const quitGame = () => {
  process.exit();
};


const verdict = (correctAnswer, userAnswer) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    console.log(`Let's try again, ${USER_NAME}!`);
    quitGame();
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

export const playGame = ({
  rule, questionGenerator, answerGenerator, questionCount = QUESTION_COUNT,
}) => {
  greet();
  console.log(rule);
  askQuestions(questionGenerator, answerGenerator, questionCount);
  congratulate();
};
