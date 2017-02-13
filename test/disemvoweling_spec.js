const disemvoweling = require('../public/javascripts/disemvoweling')
const expect = require('chai').expect

describe('disemvoweling(String)',function() {
  it('should remove any vowels(aeiou) from the given string', function() {
    expect(disemvoweling('aaabbeeiioouuz')).to.eql('bbz')
  })
  it('should return a string of letters absent spaces from the given string', function() {
    expect(disemvoweling('I am groot')).to.equal('mgrt')
  })
  it('should remove capitalization in the given string', function() {
    expect(disemvoweling('MMMMM that tastes good')).to.eql('mmmmmthttstsgd')
  })
  it('should remove any special characters from the given string', function() {
    expect(disemvoweling('I aM groot!@#$%^&*()_-><.,/?\\}{][]f`~')).to.eql('mgrtf')
  })
  it('should return with an empty string if given no input or if all characters have been removed', function() {
    expect(disemvoweling()).to.eql('')
    expect(disemvoweling('aeiou')).to.eql('')
  })
})
