import readlineSync from 'readline-sync';


let USER_NAME;
const QUESTION_COUNT = 3;

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

const askQuestions = (questionGenerator, answerGenerator, questionCount) => {
  for (let i = 0; i < questionCount; i += 1) {
    const question = questionGenerator();
    const correctAnswer = answerGenerator(question);
    const userAnswer = getAnswerToQuestion(question);
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
