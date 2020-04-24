import readlineSync from 'readline-sync';

// Global variable
export const correctAnswerСounter = 3;
const correctAnswer = 'yes';
const wrongAnswer = 'no';
const welcomeMessage = 'Welcome to the BrainGames!\n\n';
const delimeter = ' ';

// Generator of random integer from start to end
export const getRandomInteger = (start, end) => Math.floor(Math.random() * (end - start) + start);

// generate Dataset for game
export const generateDataset = (numbersCount, startRange, endRange) => {
  const dataset = [];
  for (let i = 0; i < correctAnswerСounter; i += 1) {
    dataset[i] = [];
    for (let j = 0; j < numbersCount; j += 1) {
      dataset[i].push(getRandomInteger(startRange, endRange));
    }
  }
  return dataset;
};

// format Dataset for question text to Dvizhok
export const formatDataset = (dataset) => {
  const questions = [];
  for (let i = 0; i < correctAnswerСounter; i += 1) {
    questions.push(dataset[i].join(delimeter));
  }
  return questions;
};

// make Collection of correctAnswers to Dvizhok
export const generateCorrectAnswers = (dataset, checkdataset) => {
  const answers = [];
  for (let i = 0; i < correctAnswerСounter; i += 1) {
    const answer = (checkdataset(dataset[i])) ? correctAnswer : wrongAnswer;
    answers.push(answer);
  }
  return answers;
};

/** ***************
Движок для всех игр: приветствие, интерактивное взаимодействие с пользователем,
проигрывание раундов, финальное поздравление
**************** */

// Игровой процесс
export const launchGameEngine = (gameRules, questions, correctAnswers) => {
  console.log(welcomeMessage, gameRules);
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello, ', userName, '!\n');
  for (let i = 0; i < correctAnswerСounter; i += 1) {
    console.log('Question: ', questions[i]);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswers[i]) {
      console.log('Correct!');
    } else {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswers[i]}". Lets try again, ${userName}!`);
    }
  }
  return console.log('Congratulations, ', userName, '!');
};
