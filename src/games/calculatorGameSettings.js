import { launchGameEngine } from '../index.js';

import { generateDataset } from '../common.js';

// Настройки параметров игры
const numbersCount = 2;
const startRange = 1;
const endRange = 10;
const mathOperator = '*-+';
const gameRules = 'What is the result of the expression?\n';

// Функция-генератор случайного символа в переданной последовательности
const generateRandomSymbol = (sequence) => sequence[Math.floor(Math.random() * sequence.length)];

// form Dataset for question text
const formExpression = (dataset) => {
  const questions = [];
  dataset.forEach((item) => questions.push(item.join(` ${generateRandomSymbol(mathOperator)} `)));
  return questions;
};

// Функция вычисления выражения
const evaluateExpression = (gameData, questions) => {
  const calcResult = [];
  for (let i = 0; i < gameData.length; i += 1) {
    const [firstOperand, secondOperand] = gameData[i];
    switch (true) {
      case questions[i].includes('*'): {
        calcResult.push(`${firstOperand * secondOperand}`);
        break;
      }
      case questions[i].includes('+'): {
        calcResult.push(`${firstOperand + secondOperand}`);
        break;
      }
      case questions[i].includes('-'): {
        calcResult.push(`${firstOperand - secondOperand}`);
        break;
      }
      default:
        break;
    }
  }
  return calcResult;
};

// Передача параметров игровому процессу
const gameData = generateDataset(numbersCount, startRange, endRange);
const questions = formExpression(gameData);
const correctAnswers = evaluateExpression(gameData, questions);
const calculator = () => launchGameEngine(gameRules, questions, correctAnswers);

export default calculator;
