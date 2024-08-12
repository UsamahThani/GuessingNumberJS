const prompt = require('prompt-sync')({sigint: true});
 
// Random number from 1 - 100


// This variable is used to determine if the app should continue prompting the user for input
let foundCorrectNumber = false;


let guessingNumber = () => {
  let numberInMind = Math.floor(Math.random() * 100) + 1;
  while (!foundCorrectNumber) {
    // Step 1: Get user input (don't forget that the input is a string)
    let guessStr = prompt("Between 1-100, try guess the number in my head : ")
    let guessNum = Number(guessStr)
    
    
  
    // Step 2: Compare the guess to the secret answer and
    // let the user know the feedback (too large, too small, correct).
    if (guessNum > numberInMind) {
      console.log("Too bad too big.")
    } else if (guessNum < numberInMind) {
      console.log("That's too small ;)")
    } else if (guessNum == numberInMind) {
      console.log("Bravo! " + guessNum + " is the correct answer!")
      foundCorrectNumber = true
    }
    
  }

  if (foundCorrectNumber == true) {
    let playAgain = prompt("Wanna play again? (Y/N)").toUpperCase()
    if (playAgain == 'Y') {
      foundCorrectNumber = false
      guessingNumber()
    }
  }
}

const name = prompt("What is your name? ")
console.log(`Hi, ${name}. `)
guessingNumber()



// Bonus Point: prompt user and provide option for user to start a new game after winning