/* eslint-disable semi */
// eslint-disable-next-line semi
import getRandomNumber from '../utils.js'
// eslint-disable-next-line semi
import runGame from '../index.js'

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    default:
      throw new Error(`Unknown operator: ${operator}`)
  }
}

const generateRound = () => {
  const a = getRandomNumber(1, 20)
  const b = getRandomNumber(1, 20)
  const operators = ['+', '-', '*']
  const operator = operators[getRandomNumber(0, operators.length - 1)]

  const question = `${a} ${operator} ${b}`
  const correctAnswer = String(calculate(a, b, operator))

  return [question, correctAnswer]
}

const runCalcGame = () => {
  runGame('What is the result of the expression?', generateRound)
}

export default runCalcGame
