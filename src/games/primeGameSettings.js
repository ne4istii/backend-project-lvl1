import {
  generateGameData, launchGameEngine,
} from '../index.js';

// Настройки параметров игры
const index = 0;
const startRange = 1;
const endRange = 100;
const gameRules = 'Welcome to the BrainGames!\n\n Answer "yes" if given number is prime. Otherwise answer "no".\n';

const generateDataset = () => generateGameData(startRange, endRange);

// Функция проверки числа на простоту
const isPrime = (numbers) => {
  let denom = 2;
  const number = numbers[index];
  while (number % denom !== 0) denom += 1;
  if (denom === number) return true;
  return false;
};

// Передача параметров игровому процессу
const prime = () => launchGameEngine(gameRules, generateDataset, isPrime);

export default prime;
