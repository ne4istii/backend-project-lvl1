import correctAnswerСounter, { launchGameEngine } from '../index.js';

import getRandomInteger, { correctAnswer, wrongAnswer } from '../common.js';

// Настройки параметров игры
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

// Generate Dataset for game
const generateDataset = () => {
  const dataset = [];
  for (let i = 0; i < correctAnswerСounter; i += 1) {
    dataset[i] = [];
    dataset[i].push(getRandomInteger(startRange, endRange));
    dataset[i].push(isPrime(dataset[i]) ? correctAnswer : wrongAnswer);
  }
  return dataset;
};

// Передача параметров игровому процессу
const dataset = generateDataset();
const prime = () => launchGameEngine(gameRules, dataset);

export default prime;
