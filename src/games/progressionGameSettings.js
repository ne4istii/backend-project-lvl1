import { launchGameEngine, correctAnswerСounter } from '../index.js';

import { getRandomInteger, formQuestions } from '../common.js';

// Настройки параметров игры
const startRange = 1;
const endRange = 10;
const replacementSymbol = '..';
const progLen = 10;
const gameRules = 'What number is missing in the progression?\n';

// Generate Progression
const generateProgression = (firstElement, replacementNumber, progDiff) => {
  const progression = [];
  for (let i = 0; i < progLen; i += 1) {
    if (replacementNumber === i) progression[i] = replacementSymbol;
    else progression[i] = firstElement + progDiff * i;
  }
  return progression;
};

// Format progression
const progressionData = () => {
  const progWithHideElement = [];
  for (let i = 0; i < correctAnswerСounter; i += 1) {
    const progDiff = getRandomInteger(startRange, endRange);
    const firstElement = getRandomInteger(startRange, endRange);
    const replacementNumber = getRandomInteger(startRange - 1, progLen);
    progWithHideElement[i] = generateProgression(firstElement, replacementNumber, progDiff);
  }
  return progWithHideElement;
};

// Calculate progression element
const getHideProgressionElement = (prog) => {
  const hideElement = [];
  let diff = 0;
  for (let i = 0; i < correctAnswerСounter; i += 1) {
    const index = prog[i].indexOf(replacementSymbol);
    if (prog[i].includes(replacementSymbol) && index > 2) {
      const [startElement] = prog[i];
      diff = prog[i][index - 1] - prog[i][index - 2];
      hideElement[i] = `${startElement + diff * index}`;
    } else if (prog[i].includes(replacementSymbol)) {
      diff = prog[i][index + 2] - prog[i][index + 1];
      hideElement[i] = `${prog[i][index + 1] - diff}`;
    }
  }
  return hideElement;
};

// Передача параметров игровому процессу
const gameData = progressionData();
const questions = formQuestions(gameData);
const correctAnswers = getHideProgressionElement(gameData);
const progression = () => launchGameEngine(gameRules, questions, correctAnswers);

export default progression;
