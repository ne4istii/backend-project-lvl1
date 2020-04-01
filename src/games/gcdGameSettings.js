import {
  generateGameData, launchGameEngine,
} from '../index.js';

// Настройки параметров игры
const numbersCount = 2; // Количество генерируемых чисел
const startRange = 1;
const endRange = 100;
const gameRules = 'Welcome to the BrainGames!\n\n Find the greatest common divisor of given numbers.\n';

// Подготовка данных для движка
const generateDataset = () => generateGameData(startRange, endRange, numbersCount);

// Фунцикция вычисления НОД двух чисел
const gcd2Numbers = (firstNumber, secondNumber) => {
  if (secondNumber === 0) return Math.abs(firstNumber);
  return gcd2Numbers(secondNumber, firstNumber % secondNumber);
};

// Фунцикция вычисления НОД любого количества чисел
const calculateGcd = (numbers) => {
  const stack = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (stack.length < 2) stack.push(numbers[i]);
    if (stack.length === 2) {
      const firstNumber = stack.pop();
      const secondNumber = stack.pop();
      const resultGcd = gcd2Numbers(firstNumber, secondNumber);
      stack.push(resultGcd);
    }
  }
  return stack.pop();
};

// Передача параметров игровому процессу
const gcd = () => launchGameEngine(gameRules, generateDataset, calculateGcd);

export default gcd;
