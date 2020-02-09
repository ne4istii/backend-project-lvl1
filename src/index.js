import readlineSync from 'readline-sync';

// Фукнция-генератор случайного целого числа в заданном диапазоне
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

// Функция-генератор случайного символа в переданной последовательности (строке)
const randomSym = (str) => str[Math.floor(Math.random() * str.length)];

// Функция сравнения правильного ответа и ответа, полученного от пользователя
const compareAnswers = (counter, userName, getAnswer, correctAnswer) => {
  let rCounter;
  let getAnswerNum;
  if ((typeof (getAnswer) === 'string') && (typeof (correctAnswer) === 'number')) getAnswerNum = Number(getAnswer);
  else getAnswerNum = getAnswer;
  if (correctAnswer === getAnswerNum) {
    console.log('Correct!');
    rCounter = counter + 1;
  } else {
    console.log(`"${getAnswerNum}" is wrong answer ;(. Correct answer was "${correctAnswer}". Lets try again, ${userName}!`);
    rCounter = 0;
  }
  return rCounter;
};

// Фунцикция вычисления НОД
const calcNod = (a, b) => {
  let rA; let rB;
  while (a !== 0 && b !== 0) {
    if (a > b) rA = a % b;
    else rB = b % a;
  }
  return rA + rB;
};

// Функция вычисления математических операций
const calcFunc = (rOper, rInt1, rInt2) => {
  let trueAnswer = 0;
  if (rOper === '*') {
    trueAnswer = rInt1 * rInt2;
  } else if (rOper === '+') {
    trueAnswer = rInt1 + rInt2;
  } else trueAnswer = rInt1 - rInt2;
  return trueAnswer;
};

// Функция-генератор арифметической прогрессии с заменой одного элемента
const calcProg = (replaceSymbol, minInt, maxInt, progLen) => {
  let result = '';
  let trueAnswer;
  let progElement = randomInt(minInt, maxInt);
  const progStep = randomInt(minInt, maxInt);
  const replacePosition = randomInt(minInt, maxInt);
  for (let i = 1; i <= progLen; i += 1) {
    if (replacePosition === i) {
      result += `${replaceSymbol}\xa0`;
      trueAnswer = progElement;
    } else result += `${progElement}\xa0`;
    progElement += progStep;
  }
  return { result, trueAnswer };
};

// Функция проверки числа на четность
const parityCheck = (rInt) => {
  if ((rInt % 2) === 0) return 'yes';
  return 'no';
};

// Функция проверки числа на простоту
const IsPrime = (num) => {
  let d = 2;
  while (num % d !== 0) d += 1;
  if (d === num) return 'yes';
  return 'no';
};

export const printGreeting = () => {
  console.log('Welcome to the BrainGames!\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello, ', userName, '!\n');
  return userName;
};

export const evenParity = (minInt, maxInt, correctAnswerСounter) => {
  let counter = 0;
  const userName = printGreeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (counter < correctAnswerСounter) {
    const rInt = randomInt(minInt, maxInt);
    console.log('Question: ', rInt);
    const correctAnswer = parityCheck(rInt);
    const getAnswer = readlineSync.question('Your answer: ');
    counter = compareAnswers(counter, userName, getAnswer, correctAnswer);
  }
  console.log('Congratulations, ', userName, '!');
};

export const calc = (mathOperator, minInt, maxInt, correctAnswerСounter) => {
  let counter = 0;
  const userName = printGreeting();
  console.log('What is the result of the expression?');
  while (counter < correctAnswerСounter) {
    const rInt1 = randomInt(minInt, maxInt);
    const rInt2 = randomInt(minInt, maxInt);
    const rOper = randomSym(mathOperator);
    console.log('Question: ', rInt1, rOper, rInt2);
    const correctAnswer = calcFunc(rOper, rInt1, rInt2);
    const getAnswer = readlineSync.question('Your answer: ');
    counter = compareAnswers(counter, userName, getAnswer, correctAnswer);
  }
  console.log('Congratulations, ', userName, '!');
};

export const gcd = (minInt, maxInt, correctAnswerСounter) => {
  let counter = 0;
  const userName = printGreeting();
  console.log('Find the greatest common divisor of given numbers');
  while (counter < correctAnswerСounter) {
    const rInt1 = randomInt(minInt, maxInt);
    const rInt2 = randomInt(minInt, maxInt);
    console.log('Question: ', rInt1, rInt2);
    const correctAnswer = calcNod(rInt1, rInt2);
    const getAnswer = readlineSync.question('Your answer: ');
    counter = compareAnswers(counter, userName, getAnswer, correctAnswer);
  }
  console.log('Congratulations, ', userName, '!');
};

export const progression = (replaceSymbol, minInt, maxInt, correctAnswerСounter, progLen) => {
  let counter = 0;
  const userName = printGreeting();
  console.log('What number is missing in the progression?');
  while (counter < correctAnswerСounter) {
    const rProg = calcProg(replaceSymbol, minInt, maxInt, progLen);
    console.log('Question: ', rProg.result);
    const correctAnswer = rProg.trueAnswer;
    const getAnswer = readlineSync.question('Your answer: ');
    counter = compareAnswers(counter, userName, getAnswer, correctAnswer);
  }
  console.log('Congratulations, ', userName, '!');
};

export const prime = (minInt, maxInt, correctAnswerСounter) => {
  let counter = 0;
  const userName = printGreeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".\n');
  while (counter < correctAnswerСounter) {
    const rInt = randomInt(minInt, maxInt);
    console.log('Question: ', rInt);
    const correctAnswer = IsPrime(rInt);
    const getAnswer = readlineSync.question('Your answer: ');
    counter = compareAnswers(counter, userName, getAnswer, correctAnswer);
  }
  console.log('Congratulations, ', userName, '!');
};
