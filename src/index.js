import readlineSync from 'readline-sync';

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

const randomSym = (str) => str[Math.floor(Math.random() * str.length)];

const compareAnswers = (counter, userName, getAnswer, correctAnswer) => {
  if (correctAnswer === Number(getAnswer)) {
    console.log('Correct!');
    counter += 1;
  } else {
    console.log(Number(getAnswer), 'is wrong answer ;(. Correct answer was', correctAnswer, 'Lets try again, ', userName, '!');
    counter = 0;
  }
  return counter;
};

const calcNod = (a, b) => {
  while (a !== 0 && b !== 0) {
    if (a > b) a %= b;
    else b %= a;
  }
  return a + b;
};

export const printGreeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello, ', userName, '!\n');
  return userName;
};

/*
const makeExpressionForCalc = (x, y, z) => cons(cons(x, y), z);
const getX = point => car(car(point));
const getY = point => cdr(car(point));
const getZ = point => cdr(point);

const makeQuestionForCalc = (rInt1, rInt2, rOper) => {
  const a = makeExpressionForCalc(rInt1, rInt2, rOper);
  console.log('Question: ', getX(a), getY(a), getZ(a));
};
*/

export const evenParity = () => {
  let countCorrectAnswer = 0;
  const userName = printGreeting();
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

export const calc = () => {
  let countCorrectAnswer = 0;
  let correctAnswer = 0;
  const mathOperator = '*-+';
  const userName = printGreeting();
  while (countCorrectAnswer < 3) {
    const rInt1 = randomInt(1, 100);
    const rInt2 = randomInt(1, 100);
    const rOper = randomSym(mathOperator);
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

export const gcd = (minInt, maxInt, correctAnswerСounter) => {
  const counter = 0;
  const userName = printGreeting();
  while (counter < correctAnswerСounter) {
    const rInt1 = randomInt(minInt, maxInt);
    const rInt2 = randomInt(minInt, maxInt);
    console.log('Question: ', rInt1, rInt2);
    const correctAnswer = calcNod(rInt1, rInt2);
    const getAnswer = readlineSync.question('Your answer: ');
    compareAnswers(counter, userName, getAnswer, correctAnswer);
  }
  console.log('Congratulations, ', userName, '!');
};
