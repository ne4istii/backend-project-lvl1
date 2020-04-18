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
    progressionWithHideElement[i] = [...progression[i]];
    const replacePositionNumber = getRandomInteger(startRange - 1, progLen);
    progressionWithHideElement[i][replacePositionNumber] = replaceSymbol;
  }
  return progressionWithHideElement;
};

const generateProgression = (prog, start, diff, n) => {
  if (n === 0) prog.push(start);
  else if (n < progLen) {
    prog.push(start + diff * n);
  } else return prog;
  return generateProgression(prog, start, diff, n + 1);
};

// Generate progression
const progressionData = () => {
  const progression = [];
  for (let i = 0; i < correctAnswerСounter; i += 1) {
    const n = 0;
    const prog = [];
    const progDiff = getRandomInteger(startRange, endRange);
    const firstElement = getRandomInteger(startRange, endRange);
    progression[i] = generateProgression(prog, firstElement, progDiff, n);
  }
  return replaceProgressionElement(progression);
};

// Calculate progression element
const getHideProgressionElement = (prog) => {
  const hideElement = [];
  let diff = 0;
  for (let i = 0; i < correctAnswerСounter; i += 1) {
    const index = prog[i].indexOf(replaceSymbol);
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
const gameData = progressionData();
const questions = formatDataset(gameData);
const correctAnswers = getHideProgressionElement(gameData);
const progression = () => launchGameEngine(gameRules, questions, correctAnswers);

export default progression;
