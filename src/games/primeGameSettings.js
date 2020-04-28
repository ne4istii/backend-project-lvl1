import launchGameEngine from '../index.js';

import {
  generateDataset, formQuestions, getCorrectAnswers,
} from '../common.js';

// Настройки параметров игры
const numbersCount = 1;
const startRange = 1;
const endRange = 100;
const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

// Функция проверки числа на простоту
const isPrime = (number) => {
  if (number <= 1) return false;
  for (let i = 2; i * i <= number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

// Передача параметров игровому процессу
const numbers = generateDataset(numbersCount, startRange, endRange);
const questions = formQuestions(numbers);
const correctAnswers = getCorrectAnswers(numbers, isPrime);
const prime = () => launchGameEngine(gameRules, questions, correctAnswers);

export default prime;
