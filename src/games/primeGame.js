import {
  generateRandomInteger, launchGameEngine,
} from '../index.js';

// Настройки параметров игры
const startRange = 1;
const endRange = 100;
const gameRules = 'Welcome to the BrainGames!\n\n Answer "yes" if given number is prime. Otherwise answer "no".\n';


// Функция проверки числа на простоту
const isPrime = (number) => {
  let denom = 2;
  while (number % denom !== 0) denom += 1;
  if (denom === number) return 'yes';
  return 'no';
};

// Подготовка данных для движка
const generateGameSettings = () => {
  const number = generateRandomInteger(startRange, endRange);
  const correctAnswer = isPrime(number);
  const questionText = `${number}`;
  return { correctAnswer, questionText };
};

// Передача параметров игровому процессу
const prime = () => launchGameEngine(gameRules, generateGameSettings);

export default prime;
