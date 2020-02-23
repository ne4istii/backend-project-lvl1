import readlineSync from 'readline-sync';

// Константа - количество правильных ответов для победы игре
export const setCorrectAnswerСounter = 3;

// Фукнция-генератор случайного целого числа в заданном диапазоне
// min - начало диапазона, max - конец диапазона
export const randomInt = (minInt, maxInt) => Math.floor(Math.random() * (maxInt - minInt) + minInt);

// Функция-генератор случайного символа в переданной последовательности (строке)
export const randomSymbol = (str) => str[Math.floor(Math.random() * str.length)];

// Функция сравнения правильного ответа и ответа, полученного от пользователя
const compareAnswers = (userName, getAnswer, correctAnswer) => {
  let getAnswerNum;
  if ((typeof (getAnswer) === 'string') && (typeof (correctAnswer) === 'number')) getAnswerNum = Number(getAnswer);
  else getAnswerNum = getAnswer;
  if (correctAnswer === getAnswerNum) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${getAnswerNum}" is wrong answer ;(. Correct answer was "${correctAnswer}". Lets try again, ${userName}!`);
  return false;
};

/** ***************
Движок для всех игр: приветствие, интерактивное взаимодействие с пользователем,
проигрывание раундов, финальное поздравление
**************** */

export const printGreeting = () => {
  console.log('Welcome to the BrainGames!\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello, ', userName, '!\n');
  return userName;
};

export const playRound = (userName, correctAnswer, questionText) => {
  console.log('Question: ', questionText);
  const getAnswer = readlineSync.question('Your answer: ');
  return compareAnswers(userName, getAnswer, correctAnswer);
};

export const printCongrats = (userName) => console.log('Congratulations, ', userName, '!');
