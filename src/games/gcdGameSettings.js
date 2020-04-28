import { launchGameEngine, correctAnswerСounter } from '../index.js';

import { generateDataset, formQuestions } from '../common.js';

// Настройки параметров игры
const numbersCount = 2; // Количество генерируемых чисел
const startRange = 1;
const endRange = 100;
const gameRules = 'Find the greatest common divisor of given numbers.\n';

// Calculate Gcd
const gcd2Numbers = (firstNumber, secondNumber) => {
  if (secondNumber === 0) return Math.abs(firstNumber);
  return gcd2Numbers(secondNumber, firstNumber % secondNumber);
};

// Format Gcd data
const calculateGcd = (numbers) => {
  const result = [];
  for (let i = 0; i < correctAnswerСounter; i += 1) {
    const [firstNumber, secondNumber] = numbers[i];
    result.push(`${gcd2Numbers(firstNumber, secondNumber)}`);
  }
  return result;
};

// Передача параметров игровому процессу
const numbers = generateDataset(numbersCount, startRange, endRange);
const questions = formQuestions(numbers);
const correctAnswers = calculateGcd(numbers);
const gcd = () => launchGameEngine(gameRules, questions, correctAnswers);

export default gcd;
