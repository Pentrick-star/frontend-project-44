import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const question = getRandomNumber(2, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runPrimeGame = () => {
  runGame('Answer "yes" if given number is prime. Otherwise answer "no".', generateRound);
};

export default runPrimeGame;
