import {
  setCorrectAnswerСounter as correctAnswerCounter,
  randomInt, printGreeting, playRound, printCongrats,
} from './index.js';

// Настройки параметров игры
const minInt = 1;
const maxInt = 100;

// Функция проверки числа на четность
const checkParity = (rInt) => (rInt % 2 === 0 ? 'yes' : 'no');

const evenParity = () => {
  let counter = 0;
  const userName = printGreeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (counter < correctAnswerCounter) {
    const questionText = randomInt(minInt, maxInt);
    const correctAnswer = checkParity(questionText);
    if (playRound(userName, correctAnswer, questionText)) counter += 1;
    else counter = 0;
  }
  printCongrats(userName);
};

export default evenParity;
