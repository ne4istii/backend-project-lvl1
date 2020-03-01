import {
  generateRandomInteger, generateRandomSymbol, launchGameEngine,
} from '../index.js';

// Настройки параметров игры
const startRange = 1;
const endRange = 10;
const mathOperator = '*-+';
const gameRules = 'Welcome to the BrainGames!\n\n What is the result of the expression?\n';

// Функция вычисления математических выражений
const evaluateExpression = (mOperator, operand1, operand2) => {
  let calcResult;
  switch (mOperator) {
    case '*':
      calcResult = operand1 * operand2;
      break;
    case '+':
      calcResult = operand1 + operand2;
      break;
    case '-':
      calcResult = operand1 - operand2;
      break;
    default:
      calcResult = null;
  }
  return calcResult;
};

// Подготовка данных для движка
const generateGameSettings = () => {
  const operand1 = generateRandomInteger(startRange, endRange);
  const operand2 = generateRandomInteger(startRange, endRange);
  const operation = generateRandomSymbol(mathOperator);
  const correctAnswer = evaluateExpression(operation, operand1, operand2);
  const questionText = `${operand1} ${operation} ${operand2}`;
  return { correctAnswer, questionText };
};

// Передача параметров игровому процессу
const calculator = () => launchGameEngine(gameRules, generateGameSettings);

export default calculator;
