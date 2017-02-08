const scrabBag = require('../public/javascripts/scrabBag')
const expect = require('chai').expect

describe('ScrabBag', function() {

  it('should instantiate with @letters as object with all letters and values', function() {
    scrabBag.clear()
    expect(scrabBag.letters).to.be.an('object')
  })

  it('should instantiate with two empty arrays @uniqueValues and @amountsWithLetters', function() {
    expect(scrabBag.uniqueValues).to.eql([])
    expect(scrabBag.amountsWithLetters).to.eql([])
  })

  describe('#clear', function() {
    it('should clear member information and redefine answer', function() {
      scrabBag.letters = {'A': 1}
      scrabBag.clear()
      expect(scrabBag.letters).to.not.eql({'A': 1})
      expect(scrabBag.letters).to.eql({
        'A': 9, 'B': 2, 'C': 2, 'D': 4, 'E': 12, 'F': 2,
        'G': 3, 'H': 2, 'I': 9, 'J': 1, 'K': 1, 'L': 4,
        'M': 2, 'N': 6, 'O': 8, 'P': 2, 'Q': 1, 'R': 6,
        'S': 4, 'T': 6, 'U': 4, 'V': 2, 'W': 2, 'X': 1,
        'Y': 2, 'Z': 1, '_': 2
      })
      expect(scrabBag.uniqueValues).to.eql([])
      expect(scrabBag.amountsWithLetters).to.eql([])
    })
  })

  describe('#scrabbleTileAmounts(value)', function() {
    it('should return an array of unique values corresponding to the amounts left of each tile', function() {
      scrabBag.clear()
      expect(scrabBag.scrabbleTileAmounts()).to.eql([ 12, 9, 8, 6, 4, 3, 2, 1 ])
    })
  })

  describe('#adjustLetterAmounts(playedLetters)', function() {
    it('should adjust amounts of each letter and return updated values of each letter', function() {
      scrabBag.clear()
      expect(scrabBag.adjustLetterAmounts()).to.eql([9, 2, 2, 4, 12, 2, 3, 2, 9, 1, 1, 4, 2, 6, 8, 2, 1,
        6, 4, 6, 4, 2, 2, 1, 2, 1, 2])
      expect(scrabBag.adjustLetterAmounts('aaaaaaaaabbcc')).to.eql([ 0, 0, 0, 4, 12, 2, 3, 2, 9, 1, 1, 4,
         2, 6, 8, 2, 1, 6, 4, 6, 4, 2, 2, 1, 2, 1, 2])
    })
  })

  describe('#buildArray(updatedValues)', function() {
    it('should set @amountsWithLetters to have an array with one value, followed by the letters that exist in that value amount', function() {
      scrabBag.clear()
      scrabBag.buildArray([ 9, 2, 2, 4, 12, 2, 3, 2, 9, 1, 1, 4, 2, 6, 8, 2, 1, 6, 4, 6, 4, 2, 2, 1, 2, 1, 2 ])
      expect(scrabBag.amountsWithLetters).to.eql([
      [ '12: ', 'E' ],
      [ '9: ', 'A', 'I' ],
      [ '8: ', 'O' ],
      [ '6: ', 'N', 'R', 'T' ],
      [ '4: ', 'D', 'L', 'S', 'U' ],
      [ '3: ', 'G' ],
      [ '2: ', 'B', 'C', 'F', 'H', 'M', 'P', 'V', 'W', 'Y', '_' ],
      [ '1: ', 'J', 'K', 'Q', 'X', 'Z' ]
      ])
    })
  })
})
