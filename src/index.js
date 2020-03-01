import readlineSync from 'readline-sync';

// Константа - количество правильных ответов для победы в игре
export const correctAnswerСounter = 3;

// Фукнция-генератор случайного целого числа в заданном диапазоне
// eslint-disable-next-line max-len
export const generateRandomInteger = (startRange, endRange) => Math.floor(Math.random() * (endRange - startRange) + startRange);

// Функция-генератор случайного символа в переданной последовательности (строке)
export const generateRandomSymbol = (str) => str[Math.floor(Math.random() * str.length)];

/** ***************
Движок для всех игр: приветствие, интерактивное взаимодействие с пользователем,
проигрывание раундов, финальное поздравление
**************** */

const getUsername = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello, ', userName, '!\n');
  return userName;
};

const printCongrats = (userName) => console.log('Congratulations, ', userName, '!');

const printGameInfo = (text) => console.log(text);

// Функция сравнения правильного ответа и ответа, полученного от пользователя
const compareAnswers = (userName, userAnswer, correctAnswer) => {
  let conversionUserAnswer;
  if ((typeof (getAnswer) === 'string') && (typeof (correctAnswer) === 'number')) conversionUserAnswer = Number(userAnswer);
  else conversionUserAnswer = userAnswer;
  if (correctAnswer === conversionUserAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". Lets try again, ${userName}!`);
  return false;
};

// Игровой процесс
export const launchGameEngine = (gameRules, generateQuestion) => {
  let counter = 0;
  printGameInfo(gameRules);
  const userName = getUsername();
  while (counter < correctAnswerСounter) {
    const gameSettings = generateQuestion();
    console.log('Question: ', gameSettings.questionText);
    const userAnswer = readlineSync.question('Your answer: ');
    if (compareAnswers(userName, userAnswer, gameSettings.correctAnswer)) {
      counter += 1;
    } else counter = 0;
  }
  printCongrats(userName);
};
