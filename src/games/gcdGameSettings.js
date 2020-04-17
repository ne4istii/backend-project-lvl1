import {
  launchGameEngine, generateDataset, formatDataset, correctAnswerСounter,
} from '../index.js';

// Настройки параметров игры
const numbersCount = 2; // Количество генерируемых чисел
const startRange = 1;
const endRange = 100;
const gameRules = 'Find the greatest common divisor of given numbers.\n';

// Фунцикция вычисления НОД двух чисел
const gcd2Numbers = (firstNumber, secondNumber) => {
  if (secondNumber === 0) return Math.abs(firstNumber);
  return gcd2Numbers(secondNumber, firstNumber % secondNumber);
};

// Фунцикция вычисления НОД любого количества чисел
const calculateGcd = (numbers) => {
  const result = [];
  for (let i = 0; i < correctAnswerСounter; i += 1) {
    const [firstNumber, secondNumber] = numbers[i];
    result.push(`${gcd2Numbers(firstNumber, secondNumber)}`);
  }
  console.log(result);
  return result;
};

// Передача параметров игровому процессу
const numbers = generateDataset(numbersCount, startRange, endRange);
const questions = formatDataset(numbers);
const correctAnswers = calculateGcd(numbers);
const gcd = () => launchGameEngine(gameRules, questions, correctAnswers);

export default gcd;
