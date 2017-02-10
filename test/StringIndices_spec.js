const StringIndices = require('../public/javascripts/StringIndices')
const expect = require('chai').expect

describe('StringIndices', function() {
  let stringTest
  beforeEach(function(){
   stringTest = new StringIndices('Please, help yourself to some')
  })
 
  describe('.parseString(String)', function() {
    it('should return an array of words which were separated by spaces in the given string', function() {
      expect(StringIndices.parseString('Please, help yourself to some')).to.eql(['Please,', 'help', 'yourself', 'to', 'some'])
    })
    it('should return an array with an empty string if no string is given', function() {
      expect(StringIndices.parseString()).to.eql([''])
    })
  })
  describe('#getWordAtIndex', function() {
    it('should return the word at word position given', function() {
      expect(stringTest.getWordAtIndex(2)).to.eql('help')
    })
    it('should return an empty string for a word position below 1 or above the string length', function() {
      expect(stringTest.getWordAtIndex(0)).to.eql('')
      expect(stringTest.getWordAtIndex(100)).to.eql('')
    })
  })
})
