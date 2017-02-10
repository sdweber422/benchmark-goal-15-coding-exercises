class StringIndices {

  constructor(stringToParse) {
    this._parsedString = StringIndices.parseString(stringToParse)
  }

  static parseString(stringToParse='') {
    return stringToParse.split(' ')
  }

  getWordAtIndex(index=0) {
    return (index < 1 || index > this._parsedString.length)
      ? ''
      : this._parsedString[index - 1]
  }

}

module.exports = StringIndices
