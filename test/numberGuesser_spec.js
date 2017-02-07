const numberGuesser = require('../public/javascripts/NumberGuesser')
const expect = require('chai').expect

describe('NumberGuesser', function() {
  it('should instantiate with @answer set to a random number between 1 and 100', function() {
    expect(numberGuesser.answer).to.be.a('number')
    expect(numberGuesser.answer).to.be.within(1, 100)
    expect(numberGuesser.guesses).to.be.an('array')
  })
  describe('#attempt()', function() {
    it('should push guesses and #compare() results into @guesses', function() {
      numberGuesser.clear()
      numberGuesser.answer = 50
      numberGuesser.attempt(1)
      numberGuesser.attempt(88)
      expect(numberGuesser.guesses).to.eql(
        [1, 'Your guess is lower than the computer\'s number',
        88, 'Your guess is higher than the computer\'s number']
      )
    })
    it('should not push "exit" into @guesses', function() {
      numberGuesser.attempt('exit')
      expect(numberGuesser.guesses).to.not.eql(
        [1, 'Your guess is lower than the computer\'s number',
        88, 'Your guess is higher than the computer\'s number', 'exit']
      )
    })
  })

  describe('#clear', function() {
    it('should clear member information and redefine answer', function() {
      const answer = numberGuesser.answer
      numberGuesser.clear()
      const newAnswer = numberGuesser.answer
      const newGuesses = numberGuesser.guesses
      expect(answer).to.not.eql(newAnswer)
      expect(newGuesses).to.eql([])
    })
  })

  describe('#compare()', function() {
    let compareResponse
    it('should simply return if parameter is "exit"', function() {
      compareResponse = numberGuesser.compare('exit')
      expect(compareResponse).to.eql()
    })
    it('should give warning if given value which is not a number', function() {
      compareResponse = numberGuesser.compare('hello')
      expect(compareResponse).to.eql('Please enter a number, no letters accepted')
    })
    it('should give warning if number is not between 1 and 100(inclusive)', function() {
      compareResponse = numberGuesser.compare(101)
      let anotherCompareResponse = numberGuesser.compare(0)
      expect(compareResponse).to.eql('Please enter a number between 1 and 100, including 1 or 100')
      expect(anotherCompareResponse).to.eql('Please enter a number between 1 and 100, including 1 or 100')
    })
    it('should return affirmation of correctness if guess is same as @answer', function() {
      numberGuesser.answer = 50
      compareResponse = numberGuesser.compare(50)
      expect(compareResponse).to.eql('You guessed correctly!')
    })
    it('should let user know if guessed number is lower than @answer', function() {
      compareResponse = numberGuesser.compare(40)
      expect(compareResponse).to.eql('Your guess is lower than the computer\'s number')
    })
    it('should let user know if guessed number is higher than @answer', function() {
      compareResponse = numberGuesser.compare(60)
      expect(compareResponse).to.eql('Your guess is higher than the computer\'s number')
    })
  })
})
