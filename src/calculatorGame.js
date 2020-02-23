import {
  setCorrectAnswerСounter as correctAnswerCounter,
  randomInt, randomSymbol, printGreeting, playRound, printCongrats,
} from './index.js';

// Настройки параметров игры
const minInt = 1;
const maxInt = 10;
const mathOperator = '*-+';

// Функция вычисления математических операций
const evaluateExpression = (rOperator, rInt1, rInt2) => {
  let trueAnswer = 0;
  if (rOperator === '*') {
    trueAnswer = rInt1 * rInt2;
  } else if (rOperator === '+') {
    trueAnswer = rInt1 + rInt2;
  } else trueAnswer = rInt1 - rInt2;
  return trueAnswer;
};

const calculator = () => {
  let counter = 0;
  const userName = printGreeting();
  console.log('What is the result of the expression?');
  while (counter < correctAnswerCounter) {
    const rInt1 = randomInt(minInt, maxInt);
    const rInt2 = randomInt(minInt, maxInt);
    const rOperator = randomSymbol(mathOperator);
    const correctAnswer = evaluateExpression(rOperator, rInt1, rInt2);
    const questionText = String(`${rInt1} ${rOperator} ${rInt2}`);
    if (playRound(userName, correctAnswer, questionText)) counter += 1;
    else counter = 0;
  }
  printCongrats(userName);
};

export default calculator;
