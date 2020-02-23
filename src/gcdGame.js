import {
  setCorrectAnswerСounter as correctAnswerCounter,
  randomInt, printGreeting, playRound, printCongrats,
} from './index.js';

// Настройки параметров игры
const minInt = 1;
const maxInt = 100;

// Фунцикция вычисления НОД
const calcGcd = (num1, num2) => {
  if (num2 === 0) return num1;
  return calcGcd(num2, num1 % num2);
};

const gcd = () => {
  let counter = 0;
  const userName = printGreeting();
  console.log('Find the greatest common divisor of given numbers');
  while (counter < correctAnswerCounter) {
    const rInt1 = randomInt(minInt, maxInt);
    const rInt2 = randomInt(minInt, maxInt);
    const questionText = String(`${rInt1} ${rInt2}`);
    const correctAnswer = calcGcd(rInt1, rInt2);
    if (playRound(userName, correctAnswer, questionText)) counter += 1;
    else counter = 0;
  }
  printCongrats(userName);
};

export default gcd;
