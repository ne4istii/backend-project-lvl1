import {
  generateRandomInteger, launchGameEngine,
} from '../index.js';

// Настройки параметров игры
const startRange = 1;
const endRange = 100;
const gameRules = 'Welcome to the BrainGames!\n\n Answer "yes" if the number is even, otherwise answer "no".\n';

// Функция проверки числа на четность
const isParity = (number) => (number % 2 === 0 ? 'yes' : 'no');

// Подготовка данных для движка
const generateGameSettings = () => {
  const number = generateRandomInteger(startRange, endRange);
  const correctAnswer = isParity(number);
  const questionText = `${number}`;
  return { correctAnswer, questionText };
};

// Передача параметров игровому процессу
const evenParity = () => launchGameEngine(gameRules, generateGameSettings);

export default evenParity;
