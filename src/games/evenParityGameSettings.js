import {
  launchGameEngine, generateGameData,
} from '../index.js';

// Настройки параметров игры
const startRange = 1;
const endRange = 100;
const gameRules = 'Welcome to the BrainGames!\n\n Answer "yes" if the number is even, otherwise answer "no".\n';

const generateDataset = () => generateGameData(startRange, endRange);

// Функция проверки числа на четность
const isParity = (numbers) => {
  const denom = 2;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % denom === 0) return true;
  }
  return false;
};

// Передача параметров игровому процессу
const evenParity = () => launchGameEngine(gameRules, generateDataset, isParity);

export default evenParity;
