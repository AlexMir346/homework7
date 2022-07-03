//Завдання #1
//Create words array
const words = ['apple', 'pear', 'mango', 'banana'];
// Choose the random word.
const word = words[Math.floor(Math.random() * words.length)];
// Setup an array of answers
const answerArray = [];

for (let i = 0; i < word.length; i++) {
  answerArray[i] = '_';
}

const remainingLetters = word.length;
// Game loop
while (remainingLetters > 0) {
  // Show The player their progress
  alert(answerArray.join(' '));
  // Take input from the player
  const guess = prompt('Guess the letter, or click Cancel to stop playing');
  if (guess === null) {
    alert('The game stopped');
    break;
  } else if (guess != null && guess.length !== 1) {
    alert('Please enter a sigle letter');
  } else {
    // Update the game state with the guess
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }
  // The end of game loop
}
// Show the result and congratz player
alert(answerArray.join(' '));
alert(`Good job! The answer was: ${word}`);
