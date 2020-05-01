import correctAnswerСounter, { launchGameEngine } from '../index.js';
import getRandomInteger from '../common.js';

// Настройки параметров игры
const startRange = 1;
const endRange = 10;
const replacementSymbol = '..';
const delimeter = ' ';
const progLen = 10;
const gameRules = 'What number is missing in the progression?\n';

// Generate Progression
const generateProgression = (firstElement, replacementNumber, progDiff) => {
  const progression = [];
  for (let i = 0; i < progLen; i += 1) {
    if (replacementNumber === i) progression[i] = replacementSymbol;
    else progression[i] = firstElement + progDiff * i;
  }
  return progression.join(delimeter);
};

// Form game data
const generateDataset = () => {
  const dataset = [];
  for (let i = 0; i < correctAnswerСounter; i += 1) {
    dataset[i] = [];
    const progDiff = getRandomInteger(startRange, endRange);
    const firstElement = getRandomInteger(startRange, endRange);
    const replacementNumber = getRandomInteger(startRange - 1, progLen);
    const hideElementValue = `${firstElement + progDiff * replacementNumber}`;
    dataset[i].push(generateProgression(firstElement, replacementNumber, progDiff));
    dataset[i].push(hideElementValue);
  }
  return dataset;
};

// Передача параметров игровому процессу
const dataset = generateDataset();
const progression = () => launchGameEngine(gameRules, dataset);

export default progression;
