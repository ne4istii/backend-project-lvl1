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

// Вывод на экран результирующих результатов
const printCorrectAnswer = (userAnswer, correctAnswer) => {
  let printableCorrectAnswer = '';
  if ((userAnswer === 'yes') || (correctAnswer === false)) {
    printableCorrectAnswer = 'no';
  }
  if ((userAnswer === 'no') || (correctAnswer === true)) {
    printableCorrectAnswer = 'yes';
  }
  if (correctAnswer === 'number') {
    printableCorrectAnswer = String(correctAnswer);
  } else printableCorrectAnswer = correctAnswer;
  return printableCorrectAnswer;
};

// Функция преобразования ответа пользователя к нужному типу данных
const compareStringAndNumberAnswers = (userAnswer, correctAnswer) => {
  if (Number(userAnswer) === correctAnswer) {
    return true;
  }
  return false;
};

const compareBolleanAnswers = (userAnswer, correctAnswer) => {
  if (((userAnswer === 'yes') && (correctAnswer === true)) || ((userAnswer === 'no') && (correctAnswer === false))) {
    return true;
  }
  return false;
};

// Функция сравнения правильного ответа и ответа, полученного от пользователя
const compareAnswers = (userAnswer, correctAnswer) => {
  if (typeof (correctAnswer) === 'boolean') {
    return compareBolleanAnswers(userAnswer, correctAnswer);
  }
  return compareStringAndNumberAnswers(userAnswer, correctAnswer);
};

// Подготовка данных для движка
export const generateGameData = (startRange, endRange, numbersCount = 1) => {
  const gameData = [];
  for (let i = 0; i < numbersCount; i += 1) {
    gameData[i] = generateRandomInteger(startRange, endRange);
  }
  return gameData;
};

// Форматирование входных данных для вывода в консоль
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
    if (compareAnswers(userAnswer, correctAnswer)) {
      console.log('Correct!');
      counter += 1;
    } else {
      const printableCorrectAnswer = printCorrectAnswer(userAnswer, correctAnswer);
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${printableCorrectAnswer}". Lets try again, ${userName}!`);
      counter = 0;
    }
  }
  printCongrats(userName);
};
