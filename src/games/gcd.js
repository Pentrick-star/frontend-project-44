/* eslint-disable semi */
import getRandomNumber from '../utils.js'
import runGame from '../index.js'

const findGCD = (a, b) => {
  if (b === 0) return a;
  return findGCD(b, a % b)
}

const generateRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(findGCD(num1, num2));
  return [question, correctAnswer]
}

const runGCDGame = () => {
  runGame('Find the greatest common divisor of given numbers.', generateRound)
}

export default runGCDGame
