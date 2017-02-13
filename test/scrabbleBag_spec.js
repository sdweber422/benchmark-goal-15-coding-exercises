const ScrabbleBag = require('../public/javascripts/ScrabbleBag')
const expect = require('chai').expect

describe('ScrabbleBag', function() {
  let scrabbleBag = new ScrabbleBag()

  describe('#tileAmounts(value)', function() {
    it('should return an array of unique values corresponding to the amounts left of each tile', function() {
      expect(scrabbleBag.tileAmounts()).to.eql([ 12, 9, 8, 6, 4, 3, 2, 1 ])
    })
  })

  describe('#removeTiles(playedLetters)', function() {
    it('should adjust amounts of each letter and return updated values of each letter', function() {
      expect(scrabbleBag.removeTiles()).to.eql(
        { A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9,
        J: 1, K: 1, L: 4, M: 2, N: 6, O: 8, P: 2, Q: 1, R: 6,
        S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1, _: 2 }
      )
      expect(scrabbleBag.removeTiles('aaaaaaaaabbbcc')).to.eql(
        { A: 0, B: 0, C: 0, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9,
        J: 1, K: 1, L: 4, M: 2, N: 6, O: 8, P: 2, Q: 1, R: 6,
        S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1, _: 2 }
      )
    })
  })

  describe('#displayTiles()', function() {
    let scrabbleBag = new ScrabbleBag()
    it('should set @amountsWithLetters to have an array with one value, followed by ' +
    'the letters that exist in that value amount', function() {
      expect(scrabbleBag.displayTiles()).to.eql([
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
  describe('#error', function() {
    it('should return error messages for unknown characters and entering more characters ' +
    'than exist in Scrabble Bag', function() {
      let scrabbleBag = new ScrabbleBag()
      scrabbleBag.removeTiles('kkk345k')
      expect(scrabbleBag.error()).to.eql([
        'You entered K more times than it exist in database',
        'You entered K more times than it exist in database',
        '3 does not exist in this Scrabble Bag',
        '4 does not exist in this Scrabble Bag',
        '5 does not exist in this Scrabble Bag',
        'You entered K more times than it exist in database'
      ])
    })
  })
})
