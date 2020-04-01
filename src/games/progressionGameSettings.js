import {
  launchGameEngine, generateRandomInteger,
} from '../index.js';

// Настройки параметров игры
const startRange = 1;
const endRange = 10;
const replaceSymbol = '..';
const progLen = 10;
const gameRules = 'Welcome to the BrainGames!\n\n What number is missing in the progression?\n';


const replaceProgressionElement = (progression) => {
  const progressionWithHideElement = [];
  const replacePositionNumber = generateRandomInteger(startRange, progLen);
  for (let i = 0; i < progLen; i += 1) {
    if (replacePositionNumber === i) progressionWithHideElement[i] = replaceSymbol;
    else progressionWithHideElement[i] = progression[i];
  }
  return progressionWithHideElement;
};

const generateProgression = () => {
  let progElement = generateRandomInteger(startRange, endRange);
  const progStep = generateRandomInteger(startRange, endRange);
  const progression = [];
  for (let i = 0; i < progLen; i += 1) {
    progression[i] = progElement;
    progElement += progStep;
  }
  return replaceProgressionElement(progression);
};

const getHideProgressionElement = (prog) => {
  let hideElement = 0;
  for (let i = 0; i < progLen; i += 1) {
    if (prog[i] === replaceSymbol && i === 0) {
      hideElement = 2 * prog[i + 1] - prog[i + 2];
    }
    if (prog[i] === replaceSymbol && i === (progLen - 1)) {
      hideElement = 2 * prog[i - 1] - prog[i - 2];
    } else hideElement = (prog[i - 1] + prog[i + 1]) / 2;
  }
  return hideElement;
};


// Передача параметров игровому процессу
// eslint-disable-next-line max-len
const progression = () => launchGameEngine(gameRules, generateProgression, getHideProgressionElement);

export default progression;
