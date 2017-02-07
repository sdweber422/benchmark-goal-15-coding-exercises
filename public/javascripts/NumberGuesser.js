class NumberGuesser {
    constructor() {
    this.clear()
  }
  attempts(guess) {
    if(guess !== 'exit') {
     this.guesses.push(guess, this.compare(guess))
   }
  }

  clear() {
    this.answer = Math.ceil(Math.random() * 100)
    this.guesses = []
  }

  compare(guess) {
    if(guess === 'exit') {return}
    guess = parseInt(guess)
      if(isNaN(guess)) return 'Please enter a number, no letters accepted'
      if(guess < 1 || guess > 100) 'Please enter a number between 1 and 100, including 1 or 100'
      if(guess === this.answer) return 'You guessed correctly!'
      if(guess < this.answer) return 'Your guess is lower than the computer\'s number'
      if(guess > this.answer) return 'Your guess is higher than the computer\'s number'
    }
}

module.exports = new NumberGuesser();
