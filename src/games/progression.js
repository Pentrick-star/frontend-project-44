import getRandomNumber from '../utils.js'
import runGame from '../index.js'

const makeProgression = (start, step, length) => Array.from({ length }, (_, i) => start + i * step)

const generateRound = () => {
  const progressionLength = getRandomNumber(5, 10)
  const start = getRandomNumber(1, 30)
  const step = getRandomNumber(1, 10)

  const progression = makeProgression(start, step, progressionLength)
  const hiddenIndex = getRandomNumber(0, progressionLength - 1)
  const correctAnswer = String(progression[hiddenIndex])
  const progressionWithHidden = progression
    .map((num, idx) => (idx === hiddenIndex ? '..' : num))
    .join(' ')
  
  return [progressionWithHidden, correctAnswer]
}

const runProgressionGame = () => {
  runGame('What number is missing in the progression?', generateRound)
}

export default runProgressionGame
