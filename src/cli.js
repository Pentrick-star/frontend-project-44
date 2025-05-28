/* eslint-disable semi */
// eslint-disable-next-line semi
import readlineSync from 'readline-sync'

const greetUser = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
// eslint-disable-next-line semi
}

// eslint-disable-next-line semi
export default greetUser
