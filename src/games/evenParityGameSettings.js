import {
  launchGameEngine, generateDataset, formatDataset, generateCorrectAnswers,
} from '../index.js';

// Настройки параметров игры
const numbersCount = 1;
const startRange = 1;
const endRange = 100;
const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".\n';

// Функция проверки числа на четность
const isParity = (number) => number % 2 === 0;

// Передача параметров игровому процессу
const numbers = generateDataset(numbersCount, startRange, endRange);
const questions = formatDataset(numbers);
const correctAnswers = generateCorrectAnswers(numbers, isParity);
const evenParity = () => launchGameEngine(gameRules, questions, correctAnswers);

export default evenParity;
