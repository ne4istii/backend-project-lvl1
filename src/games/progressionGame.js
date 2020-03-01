import {
  generateRandomInteger, launchGameEngine,
} from '../index.js';

// Настройки параметров игры
const startRange = 1;
const endRange = 10;
const replaceSymbol = '..';
const progLen = 10;
const gameRules = 'Welcome to the BrainGames!\n\n What number is missing in the progression?\n';


// Функция-генератор арифметической прогрессии с заменой одного элемента
const calcProg = () => {
  let questionText = '';
  let correctAnswer;
  let progElement = generateRandomInteger(startRange, endRange);
  const progStep = generateRandomInteger(startRange, endRange);
  const replacePosition = generateRandomInteger(startRange, progLen);
  for (let i = 1; i <= progLen; i += 1) {
    if (replacePosition === i) {
      questionText += `${replaceSymbol}\xa0`;
      correctAnswer = progElement;
    } else questionText += `${progElement}\xa0`;
    progElement += progStep;
  }
  return { correctAnswer, questionText };
};

// Передача параметров игровому процессу
const progression = () => launchGameEngine(gameRules, calcProg);

export default progression;
