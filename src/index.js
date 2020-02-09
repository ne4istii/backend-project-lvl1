import readlineSync from 'readline-sync';

// Фукнция-генератор случайного целого числа в заданном диапазоне
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

// Функция-генератор случайного символа в переданной последовательности (строке)
const randomSym = (str) => str[Math.floor(Math.random() * str.length)];

// Функция сравнения правильного ответа и ответа, полученного от пользователя
const compareNumericAnswers = (counter, userName, getAnswer, correctAnswer) => {
  let rCounter;
  if (Number(correctAnswer) === Number(getAnswer)) {
    console.log('Correct!');
    rCounter = counter + 1;
  } else {
    console.log(Number(getAnswer), 'is wrong answer ;(. Correct answer was', Number(correctAnswer), 'Lets try again, ', userName, '!');
    rCounter = 0;
  }
  return rCounter;
};

// Функция сравнения правильного ответа и ответа, полученного от пользователя
const compareWordAnswers = (counter, userName, getAnswer, correctAnswer) => {
  let rCounter;
  if (correctAnswer === getAnswer) {
    console.log('Correct!');
    rCounter = counter + 1;
  } else {
    console.log(`"${getAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". Lets try again, ${userName}!`);
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
const calcProg = (replaceSymbol, minInt, maxInt) => {
  let result = '';
  let trueAnswer;
  let progElement = randomInt(minInt, maxInt);
  const progStep = randomInt(minInt, maxInt);
  const replacePosition = randomInt(minInt, maxInt);
  for (let i = 1; i <= 10; i += 1) {
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
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello, ', userName, '!\n');
  return userName;
};

export const evenParity = (minInt, maxInt, correctAnswerСounter) => {
  let counter = 0;
  const userName = printGreeting();
  while (counter < correctAnswerСounter) {
    const rInt = randomInt(minInt, maxInt);
    console.log('Question: ', rInt);
    const correctAnswer = parityCheck(rInt);
    const getAnswer = readlineSync.question('Your answer: ');
    counter = compareWordAnswers(counter, userName, getAnswer, correctAnswer);
  }
  console.log('Congratulations, ', userName, '!');
};

export const calc = (mathOperator, minInt, maxInt, correctAnswerСounter) => {
  let counter = 0;
  const userName = printGreeting();
  while (counter < correctAnswerСounter) {
    const rInt1 = randomInt(minInt, maxInt);
    const rInt2 = randomInt(minInt, maxInt);
    const rOper = randomSym(mathOperator);
    console.log('Question: ', rInt1, rOper, rInt2);
    const correctAnswer = calcFunc(rOper, rInt1, rInt2);
    const getAnswer = readlineSync.question('Your answer: ');
    counter = compareNumericAnswers(counter, userName, getAnswer, correctAnswer);
  }
  console.log('Congratulations, ', userName, '!');
};

export const gcd = (minInt, maxInt, correctAnswerСounter) => {
  let counter = 0;
  const userName = printGreeting();
  while (counter < correctAnswerСounter) {
    const rInt1 = randomInt(minInt, maxInt);
    const rInt2 = randomInt(minInt, maxInt);
    console.log('Question: ', rInt1, rInt2);
    const correctAnswer = calcNod(rInt1, rInt2);
    const getAnswer = readlineSync.question('Your answer: ');
    counter = compareNumericAnswers(counter, userName, getAnswer, correctAnswer);
  }
  console.log('Congratulations, ', userName, '!');
};

export const progression = (replaceSymbol, minInt, maxInt, correctAnswerСounter) => {
  const userName = printGreeting();
  let counter = 0;
  while (counter < correctAnswerСounter) {
    const rProg = calcProg(replaceSymbol, minInt, maxInt);
    console.log('Question: ', rProg.result);
    const correctAnswer = rProg.trueAnswer;
    const getAnswer = readlineSync.question('Your answer: ');
    counter = compareNumericAnswers(counter, userName, getAnswer, correctAnswer);
  }
  console.log('Congratulations, ', userName, '!');
};

export const prime = (minInt, maxInt, correctAnswerСounter) => {
  const userName = printGreeting();
  let counter = 0;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".\n');
  while (counter < correctAnswerСounter) {
    const rInt = randomInt(minInt, maxInt);
    console.log('Question: ', rInt);
    const correctAnswer = IsPrime(rInt);
    const getAnswer = readlineSync.question('Your answer: ');
    counter = compareWordAnswers(counter, userName, getAnswer, correctAnswer);
  }
  console.log('Congratulations, ', userName, '!');
};
