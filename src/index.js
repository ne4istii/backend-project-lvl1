import readlineSync from 'readline-sync';

// Global variables
const correctAnswerСounter = 3;
const welcomeMessage = 'Welcome to the BrainGames!\n\n';

// Game play
export const launchGameEngine = (gameRules, gataset) => {
  console.log(welcomeMessage, gameRules);
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello, ', userName, '!\n');
  for (let i = 0; i < correctAnswerСounter; i += 1) {
    const [question, correctAnswer] = gataset[i];
    console.log('Question: ', question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". Lets try again, ${userName}!`);
    }
  }
  console.log('Congratulations, ', userName, '!');
};

export default correctAnswerСounter;
