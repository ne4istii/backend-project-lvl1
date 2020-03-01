import {
  generateRandomInteger, launchGameEngine,
} from '../index.js';

// Настройки параметров игры
const startRange = 1;
const endRange = 100;
const gameRules = 'Welcome to the BrainGames!\n\n Find the greatest common divisor of given numbers.\n';

// Фунцикция вычисления НОД
const calcGcd = (number1, number2) => {
  if (number2 === 0) return number1;
  return calcGcd(number2, number1 % number2);
};

// Подготовка данных для движка
const generateGameSettings = () => {
  const number1 = generateRandomInteger(startRange, endRange);
  const number2 = generateRandomInteger(startRange, endRange);
  const correctAnswer = calcGcd(number1, number2);
  const questionText = `${number1} ${number2}`;
  return { correctAnswer, questionText };
};

// Передача параметров игровому процессу
const gcd = () => launchGameEngine(gameRules, generateGameSettings);

export default gcd;
