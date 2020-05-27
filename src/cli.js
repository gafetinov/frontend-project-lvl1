import readlineSync from 'readline-sync';
import random from 'lodash/random.js';


const isEven = (number) => number % 2 === 0;

export const greet = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  return userName;
};

export const playEvenGame = () => {
  const userName = greet();
  const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(gameRule);
  const questionCount = 3;
  for (let i = 0; i < questionCount; i += 1) {
    const guessedNumber = random(0, 100);
    console.log(`Question: ${guessedNumber}`);
    const userAnswer = String(readlineSync.question('Your answer: '));
    const correctAnswer = isEven(guessedNumber) ? 'yes' : 'no';
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
