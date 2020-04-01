import readlineSync from 'readline-sync';

// Константа - количество правильных ответов для победы в игре
const correctAnswerСounter = 3;

// Константа - разделитель для отображения данных в игре
const delimiter = ' ';

// Фукнция-генератор случайного целого числа в заданном диапазоне
// eslint-disable-next-line max-len
export const generateRandomInteger = (startRange, endRange) => Math.floor(Math.random() * (endRange - startRange) + startRange);

/** ********** Вспомогательные функции, общие для всех игр ************** */

// Получение имени пользователя из ввода
const getUsername = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello, ', userName, '!\n');
  return userName;
};

// Вывод на экран приветствия
const printCongrats = (userName) => console.log('Congratulations, ', userName, '!');

// Вывод на экран текста (правила игры)
const printGameInfo = (text) => console.log(text);

// Функция преобразования ответа пользователя к нужному типу данных
const transformTypeUserAnswer = (userAnswer, correctAnswer) => {
  if ((typeof (userAnswer) === 'string') && (typeof (correctAnswer) === 'number')) return Number(userAnswer);
  return userAnswer;
};

// Функция сравнения правильного ответа и ответа, полученного от пользователя
const compareAnswers = (userName, userAnswer, correctAnswer) => {
  if ((userAnswer !== 'yes') && (userAnswer !== 'no') && (correctAnswer === false)) {
    const answer = 'no';
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}". Lets try again, ${userName}!`);
    return false;
  }
  if ((userAnswer !== 'yes') && (userAnswer !== 'no') && (correctAnswer === true)) {
    const answer = 'yes';
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}". Lets try again, ${userName}!`);
    return false;
  }
  if ((userAnswer === 'yes') && (correctAnswer === true)) {
    console.log('Correct!');
    return true;
  }
  if ((userAnswer === 'no') && (correctAnswer === false)) {
    console.log('Correct!');
    return true;
  }
  if ((userAnswer === 'yes') && (correctAnswer === false)) {
    const answer = 'no';
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}". Lets try again, ${userName}!`);
    return false;
  }
  if ((userAnswer === 'no') && (correctAnswer === true)) {
    const answer = 'yes';
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}". Lets try again, ${userName}!`);
    return false;
  }
  if ((typeof (correctAnswer) !== 'boolean') && correctAnswer === transformTypeUserAnswer(userAnswer, correctAnswer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". Lets try again, ${userName}!`);
  return false;
};

// Подготовка данных для движка
export const generateGameData = (startRange, endRange, numbersCount = 1) => {
  const gameData = [];
  for (let i = 0; i < numbersCount; i += 1) {
    gameData[i] = generateRandomInteger(startRange, endRange);
  }
  return gameData;
};

// Форматирование данных для вывода в консоль
const formatDataset = (dataset) => dataset.join(delimiter);


/** ***************
Движок для всех игр: приветствие, интерактивное взаимодействие с пользователем,
проигрывание раундов, финальное поздравление
**************** */


// Игровой процесс
export const launchGameEngine = (gameRules, generateDataset, getCorrectAnswer) => {
  let counter = 0;
  printGameInfo(gameRules);
  const userName = getUsername();
  while (counter < correctAnswerСounter) {
    const dataset = generateDataset();
    const questionText = formatDataset(dataset, delimiter);
    const correctAnswer = getCorrectAnswer(dataset);
    console.log('Question: ', questionText);
    const userAnswer = readlineSync.question('Your answer: ');
    if (compareAnswers(userName, userAnswer, correctAnswer)) {
      counter += 1;
    } else counter = 0;
  }
  printCongrats(userName);
};
