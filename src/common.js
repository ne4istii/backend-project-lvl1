import correctAnswerСounter from './index.js';

// Global constants
const correctAnswer = 'yes';
const wrongAnswer = 'no';
const delimeter = ' ';

// Generator of random integer from start to end
const getRandomInteger = (start, end) => Math.floor(Math.random() * (end - start) + start);

// Generate Dataset for game
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

// Form dataset for question text
export const formQuestions = (dataset) => {
  const questions = [];
  dataset.forEach((item) => questions.push(item.join(delimeter)));
  return questions;
};

// Make Collection of correct answers
export const getCorrectAnswers = (dataset, checkDataset) => {
  const answers = [];
  dataset.forEach((item) => answers.push(checkDataset(item) ? correctAnswer : wrongAnswer));
  return answers;
};

export default getRandomInteger;
