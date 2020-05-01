// Global constants
export const correctAnswer = 'yes';
export const wrongAnswer = 'no';

// Generator of random integer from start to end
const getRandomInteger = (start, end) => Math.floor(Math.random() * (end - start) + start);

export default getRandomInteger;
