import readlineSync from 'readline-sync';

const actual = () => {
  console.log('Welcome to the BrainGames!\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello, ', userName, '!');
};

export default actual;
