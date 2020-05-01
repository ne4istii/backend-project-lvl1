import correctAnswerСounter, { launchGameEngine } from '../index.js';

import getRandomInteger from '../common.js';

// Настройки параметров игры
const correctAnswer = 'yes';
const wrongAnswer = 'no';
const startRange = 1;
const endRange = 100;
const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".\n';

// Функция проверки числа на четность
const isParity = (number) => number % 2 === 0;

// Generate Dataset for game
const generateDataset = () => {
  const dataset = [];
  for (let i = 0; i < correctAnswerСounter; i += 1) {
    dataset[i] = [];
    dataset[i].push(getRandomInteger(startRange, endRange));
    dataset[i].push(isParity(dataset[i]) ? correctAnswer : wrongAnswer);
  }
  return dataset;
};

// Передача параметров игровому процессу
const dataset = generateDataset();
const evenParity = () => launchGameEngine(gameRules, dataset);

export default evenParity;
