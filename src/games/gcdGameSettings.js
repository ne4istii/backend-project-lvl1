import correctAnswerСounter, { launchGameEngine } from '../index.js';

import getRandomInteger from '../common.js';

// Global variables
const startRange = 1;
const endRange = 100;
const gameRules = 'Find the greatest common divisor of given numbers.\n';

// Calculate Gcd for 2 numbers
const calculateGcd = (firstNumber, secondNumber) => {
  if (secondNumber === 0) return Math.abs(firstNumber);
  return calculateGcd(secondNumber, firstNumber % secondNumber);
};

// Generate dataset for the game
const generateDataset = () => {
  const dataset = [];
  for (let i = 0; i < correctAnswerСounter; i += 1) {
    dataset[i] = [];
    const firstNumber = getRandomInteger(startRange, endRange);
    const secondNumber = getRandomInteger(startRange, endRange);
    dataset[i].push(`${firstNumber} ${secondNumber}`);
    dataset[i].push(`${calculateGcd(firstNumber, secondNumber)}`);
  }
  return dataset;
};

// Pass parameters to the game process
const dataset = generateDataset();
const gcd = () => launchGameEngine(gameRules, dataset);

export default gcd;
