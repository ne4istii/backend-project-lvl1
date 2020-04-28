import readlineSync from 'readline-sync';

// Global variable
const correctAnswerСounter = 3;
const welcomeMessage = 'Welcome to the BrainGames!\n\n';

// Game play
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

export default correctAnswerСounter;
