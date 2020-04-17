import {
  launchGameEngine, generateDataset, correctAnswerСounter,
} from '../index.js';

// Настройки параметров игры
const numbersCount = 2;
const startRange = 1;
const endRange = 10;
const mathOperator = '*-+';
const gameRules = 'What is the result of the expression?\n';

// Функция-генератор случайного символа в переданной последовательности
const generateRandomSymbol = (sequence) => sequence[Math.floor(Math.random() * sequence.length)];

// format Dataset for question text to Dvizhok
const formatExpression = (dataset) => {
  const questions = [];
  for (let i = 0; i < correctAnswerСounter; i += 1) {
    const operator = generateRandomSymbol(mathOperator);
    const exp = dataset[i].join(` ${operator} `);
    questions.push(exp);
  }
  return questions;
};

// Функция вычисления выражения
const evaluateExpression = (gameData, questions) => {
  const calcResult = [];
  for (let i = 0; i < gameData.length; i += 1) {
    switch (true) {
      case questions[i].includes('*'): {
        const [firstOperand, secondOperand] = gameData[i];
        calcResult.push(`${firstOperand * secondOperand}`);
        break;
      }
      case questions[i].includes('+'): {
        const [firstOperand, secondOperand] = gameData[i];
        calcResult.push(`${firstOperand + secondOperand}`);
        break;
      }
      case questions[i].includes('-'): {
        const [firstOperand, secondOperand] = gameData[i];
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
const questions = formatExpression(gameData);
const correctAnswers = evaluateExpression(gameData, questions);
const calculator = () => launchGameEngine(gameRules, questions, correctAnswers);

export default calculator;
