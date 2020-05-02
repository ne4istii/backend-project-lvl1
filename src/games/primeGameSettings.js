import correctAnswerСounter, { launchGameEngine } from '../index.js';

import getRandomInteger from '../common.js';

// Global variables
const correctAnswer = 'yes';
const wrongAnswer = 'no';
const startRange = 1;
const endRange = 100;
const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

// Checking a number for prime
const isPrime = (number) => {
  if (number <= 1) return false;
  for (let i = 2; i * i <= number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

// Generate dataset for the game
const generateDataset = () => {
  const dataset = [];
  for (let i = 0; i < correctAnswerСounter; i += 1) {
    dataset[i] = [];
    dataset[i].push(getRandomInteger(startRange, endRange));
    dataset[i].push(isPrime(dataset[i]) ? correctAnswer : wrongAnswer);
  }
  return dataset;
};

// Pass parameters to the game process
const dataset = generateDataset();
const prime = () => launchGameEngine(gameRules, dataset);

export default prime;
