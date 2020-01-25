import readlineSync from 'readline-sync';

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

const randomSym = (len, str) => {
  let ans = '';
  for (let i = len; i > 0; i -= 1) {
    ans += str[Math.floor(Math.random() * str.length)];
  }
  return ans;
};

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

const calc = () => {
  let countCorrectAnswer = 0;
  let correctAnswer = 0;
  const mathOperator = '*-+';
  const userName = yourName();
  console.log('Hello, ', userName, '!\n');
  while (countCorrectAnswer < 3) {
    const rInt1 = randomInt(1, 100);
    const rInt2 = randomInt(1, 100);
    const rOper = randomSym(1, mathOperator);
    console.log('Question: ', rInt1, rOper, rInt2);
    if (rOper === '*') {
      correctAnswer = rInt1 * rInt2;
    } else if (rOper === '+') {
      correctAnswer = rInt1 + rInt2;
    } else correctAnswer = rInt1 - rInt2;
    const getAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === Number(getAnswer)) {
      console.log('Correct!');
      countCorrectAnswer += 1;
    } else {
      console.log(Number(getAnswer), 'is wrong answer ;(. Correct answer was', correctAnswer, 'Lets try again, ', userName, '!');
      countCorrectAnswer = 0;
    }
  }
  console.log('Congratulations, ', userName, '!');
};

export { printGreeting, evenParity, calc };
