/* eslint-disable semi */
import getRandomNumber from '../utils.js'
import runGame from '../index.js'

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
}

const runEvenGame = () => {
  runGame('Answer "yes" if the number is even, otherwise answer "no".', generateRound)
}

export default runEvenGame
