import {
  launchGameEngine, getRandomInteger, correctAnswerСounter, formatDataset,
} from '../index.js';

// Настройки параметров игры
const startRange = 1;
const endRange = 10;
const replaceSymbol = '..';
const progLen = 10;
const gameRules = 'What number is missing in the progression?\n';

// Hide progression element
const replaceProgressionElement = (progression) => {
  const progressionWithHideElement = [];
  for (let i = 0; i < correctAnswerСounter; i += 1) {
    progressionWithHideElement[i] = [];
    const replacePositionNumber = getRandomInteger(startRange, progLen);
    for (let j = 0; j < progLen; j += 1) {
      if (replacePositionNumber === j) progressionWithHideElement[i][j] = replaceSymbol;
      else progressionWithHideElement[i][j] = progression[i][j];
    }
  }
  return progressionWithHideElement;
};

// Generate progression
const generateProgression = () => {
  const progression = [];
  for (let i = 0; i < correctAnswerСounter; i += 1) {
    progression[i] = [];
    const progStep = getRandomInteger(startRange, endRange);
    let progElement = getRandomInteger(startRange, endRange);
    for (let j = 0; j < progLen; j += 1) {
      progression[i][j] = progElement;
      progElement += progStep;
    }
  }
  return replaceProgressionElement(progression);
};

// Calculate progression element
const getHideProgressionElement = (prog) => {
  const hideElement = [];
  let diff = 0;
  for (let i = 0; i < correctAnswerСounter; i += 1) {
    const index = prog[i].indexOf(replaceSymbol);
    console.log(index);
    if (prog[i].includes(replaceSymbol) && index > 2) {
      const [startElement] = prog[i];
      diff = prog[i][index - 1] - prog[i][index - 2];
      hideElement[i] = `${startElement + diff * index}`;
    } else if (prog[i].includes(replaceSymbol)) {
      diff = prog[i][index + 2] - prog[i][index + 1];
      hideElement[i] = `${prog[i][index + 1] - diff}`;
    }
  }

  return hideElement;
};

// Передача параметров игровому процессу
const gameData = generateProgression();
const questions = formatDataset(gameData);
const correctAnswers = getHideProgressionElement(gameData);
const progression = () => launchGameEngine(gameRules, questions, correctAnswers);

export default progression;
