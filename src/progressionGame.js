import {
  setCorrectAnswerСounter as correctAnswerCounter,
  randomInt, printGreeting, playRound, printCongrats,
} from './index.js'

// Настройки параметров игры
const minInt = 1;
const maxInt = 10;
const replaceSymbol = '..';
const progLen = 10;

// Функция-генератор арифметической прогрессии с заменой одного элемента
const calcProg = () => {
  let questionText = '';
  let trueAnswer;
  let progElement = randomInt(minInt, maxInt);
  const progStep = randomInt(minInt, maxInt);
  const replacePosition = randomInt(minInt, progLen);
  for (let i = 1; i <= progLen; i += 1) {
    if (replacePosition === i) {
      questionText += `${replaceSymbol}\xa0`;
      trueAnswer = progElement;
    } else questionText += `${progElement}\xa0`;
    progElement += progStep;
  }
  return { questionText, trueAnswer };
};

const progression = () => {
  let counter = 0;
  const userName = printGreeting();
  console.log('What number is missing in the progression?');
  while (counter < correctAnswerCounter) {
    const rProg = calcProg(replaceSymbol, progLen);
    const quizText = rProg.questionText;
    const correctAnswer = rProg.trueAnswer;
    if (playRound(userName, correctAnswer, quizText)) counter += 1;
    else counter = 0;
  }
  printCongrats(userName);
};

export default progression;
