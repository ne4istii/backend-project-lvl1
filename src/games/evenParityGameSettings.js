import { launchGameEngine } from '../index.js';

import { generateDataset, formQuestions, getCorrectAnswers } from '../common.js';

// Настройки параметров игры
const numbersCount = 1;
const startRange = 1;
const endRange = 100;
const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".\n';

// Функция проверки числа на четность
const isParity = ([number]) => number % 2 === 0;

// Передача параметров игровому процессу
const numbers = generateDataset(numbersCount, startRange, endRange);
const questions = formQuestions(numbers);
const correctAnswers = getCorrectAnswers(numbers, isParity);
const evenParity = () => launchGameEngine(gameRules, questions, correctAnswers);

export default evenParity;
