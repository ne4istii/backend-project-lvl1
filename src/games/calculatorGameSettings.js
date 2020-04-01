import {
  launchGameEngine, generateGameData,
} from '../index.js';

// Настройки параметров игры
const numbersCount = 2;
const startRange = 1;
const endRange = 10;
const mathOperator = '*-+';
const gameRules = 'Welcome to the BrainGames!\n\n What is the result of the expression?\n';

// Функция-генератор случайного символа в переданной последовательности
const generateRandomSymbol = (sequence) => sequence[Math.floor(Math.random() * sequence.length)];

// Формируем данные для выражения
const expression = () => {
  const gameData = generateGameData(startRange, endRange, numbersCount);
  const expressionData = [];
  for (let i = 0; i < gameData.length; i += 1) {
    if (i < gameData.length - 1) {
      expressionData.push(gameData[i]);
      expressionData.push(generateRandomSymbol(mathOperator));
    } else expressionData.push(gameData[i]);
  }
  return expressionData;
};

// Функция вычисления выражения
const evaluateExpression = (expressionData) => {
  let calculationResult = 0;
  for (let i = 0; i < expressionData.length; i += 1) {
    switch (expressionData[i]) {
      case '*':
        calculationResult = expressionData[i - 1] * expressionData[i + 1];
        break;
      case '+':
        calculationResult = expressionData[i - 1] + expressionData[i + 1];
        break;
      case '-':
        calculationResult = expressionData[i - 1] - expressionData[i + 1];
        break;
      default:
        break;
    }
  }
  return calculationResult;
};

// Передача параметров игровому процессу

const calculator = () => launchGameEngine(gameRules, expression, evaluateExpression);


export default calculator;
