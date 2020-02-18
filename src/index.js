import readlineSync from 'readline-sync';

// Фукнция-генератор случайного целого числа в заданном диапазоне
// min - начало диапазона, max - конец диапазона
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

// Функция-генератор случайного символа в переданной последовательности (строке)
const randomSymbol = (str) => str[Math.floor(Math.random() * str.length)];

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
const calcGcd = (num1, num2) => {
  if (num2 === 0) return num1;
  return calcGcd(num2, num1 % num2);
};

// Функция вычисления математических операций
const evaluateExpression = (rOperator, rInt1, rInt2) => {
  let trueAnswer = 0;
  if (rOperator === '*') {
    trueAnswer = rInt1 * rInt2;
  } else if (rOperator === '+') {
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
const checkParity = (rInt) => (rInt % 2 === 0 ? 'yes' : 'no');

// Функция проверки числа на простоту
const IsPrime = (num) => {
  let denom = 2;
  while (num % denom !== 0) denom += 1;
  if (denom === num) return 'yes';
  return 'no';
};

export const getUsername = () => {
  console.log('Welcome to the BrainGames!\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello, ', userName, '!\n');
  return userName;
};

// Первая игра "проверка на четность" - brain-even.js
export const evenParity = (minInt, maxInt, correctAnswerСounter) => {
  let counter = 0;
  const userName = getUsername();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (counter < correctAnswerСounter) {
    const rInt = randomInt(minInt, maxInt);
    console.log('Question: ', rInt);
    const correctAnswer = checkParity(rInt);
    const getAnswer = readlineSync.question('Your answer: ');
    counter = compareAnswers(counter, userName, getAnswer, correctAnswer);
  }
  console.log('Congratulations, ', userName, '!');
};

// Вторая игра "калькулятор" - brain-calc.js
export const calculator = (mathOperator, minInt, maxInt, correctAnswerСounter) => {
  let counter = 0;
  const userName = getUsername();
  console.log('What is the result of the expression?');
  while (counter < correctAnswerСounter) {
    const rInt1 = randomInt(minInt, maxInt);
    const rInt2 = randomInt(minInt, maxInt);
    const rOperator = randomSymbol(mathOperator);
    console.log('Question: ', rInt1, rOperator, rInt2);
    const correctAnswer = evaluateExpression(rOperator, rInt1, rInt2);
    const getAnswer = readlineSync.question('Your answer: ');
    counter = compareAnswers(counter, userName, getAnswer, correctAnswer);
  }
  console.log('Congratulations, ', userName, '!');
};

// Третья игра "наибольший общий делитель (НОД)" - brain-gcd.js
export const gcd = (minInt, maxInt, correctAnswerСounter) => {
  let counter = 0;
  const userName = getUsername();
  console.log('Find the greatest common divisor of given numbers');
  while (counter < correctAnswerСounter) {
    const rInt1 = randomInt(minInt, maxInt);
    const rInt2 = randomInt(minInt, maxInt);
    console.log('Question: ', rInt1, rInt2);
    const correctAnswer = calcGcd(rInt1, rInt2);
    const getAnswer = readlineSync.question('Your answer: ');
    counter = compareAnswers(counter, userName, getAnswer, correctAnswer);
  }
  console.log('Congratulations, ', userName, '!');
};

// Четвертая игра "Арифметическая прогрессия" - brain-progression.js
export const progression = (replaceSymbol, minInt, maxInt, correctAnswerСounter, progLen) => {
  let counter = 0;
  const userName = getUsername();
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

// Пятая игра "Простое ли число?" - brain-prime.js
export const prime = (minInt, maxInt, correctAnswerСounter) => {
  let counter = 0;
  const userName = getUsername();
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
