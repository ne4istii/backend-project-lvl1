import correctAnswerСounter, { launchGameEngine } from '../index.js';

import getRandomInteger from '../common.js';

// Global variables
const startRange = 1;
const endRange = 10;
const mathOperator = '*-+';
const gameRules = 'What is the result of the expression?\n';

// Generate a random character from the passed sequence
const generateRandomSymbol = (sequence) => sequence[Math.floor(Math.random() * sequence.length)];

// Evaluate expression
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

// Generate dataset for the game
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

// Pass parameters to the game process
const dataset = generateDataset();
const calculator = () => launchGameEngine(gameRules, dataset);

export default calculator;
