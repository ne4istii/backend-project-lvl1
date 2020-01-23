import readlineSync from 'readline-sync';

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

const yourName = () => readlineSync.question('May I have your name? ');

const printGreeting = () => {
  const userName = yourName();
  console.log('Hello, ', userName, '!\n');
};

const evenParity = () => {
  let countCorrectAnswer = 0;
  const userName = yourName();
  console.log('Hello, ', userName, '!\n');
  while (countCorrectAnswer < 3) {
    const rInt = randomInt(1, 100);
    console.log('Question: ', rInt);
    const getAnswer = readlineSync.question('Your answer: ');
    if ((rInt % 2 === 0 && getAnswer === 'yes') || (rInt % 2 !== 0 && getAnswer === 'no')) {
      console.log('Correct!');
      countCorrectAnswer += 1;
    } else {
      console.log('"yes" is wrong answer ;(. Correct answer was "no". Lets try again, ', userName, '!');
      countCorrectAnswer = 0;
    }
  }
  console.log('Congratulations, ', userName, '!');
};

export { printGreeting, evenParity };
