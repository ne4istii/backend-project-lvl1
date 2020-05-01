import correctAnswerСounter, { launchGameEngine } from '../index.js';

import getRandomInteger from '../common.js';

// Настройки параметров игры
const startRange = 1;
const endRange = 10;
const mathOperator = '*-+';
const gameRules = 'What is the result of the expression?\n';

// Функция-генератор случайного символа в переданной последовательности
const generateRandomSymbol = (sequence) => sequence[Math.floor(Math.random() * sequence.length)];

// Evaluate expression function
const evaluateExpression = (firstOperand, operator, secondOperand) => {
  let calcResult = 0;
  switch (operator) {
    case '*': {
      calcResult = firstOperand * secondOperand;
      break;
    }
    case '+': {
      calcResult = firstOperand + secondOperand;
      break;
    }
    case '-': {
      calcResult = firstOperand - secondOperand;
      break;
    }
    default:
      break;
  }
  return calcResult;
};

// Generate Dataset for game
const generateDataset = () => {
  const dataset = [];
  for (let i = 0; i < correctAnswerСounter; i += 1) {
    dataset[i] = [];
    const firstNumber = getRandomInteger(startRange, endRange);
    const secondNumber = getRandomInteger(startRange, endRange);
    const operator = generateRandomSymbol(mathOperator);
    dataset[i].push(`${firstNumber} ${operator} ${secondNumber}`);
    dataset[i].push(`${evaluateExpression(firstNumber, operator, secondNumber)}`);
  }
  return dataset;
};

// Передача параметров игровому процессу
const dataset = generateDataset();
const calculator = () => launchGameEngine(gameRules, dataset);

export default calculator;
