class ScrabBag {
  
  constructor() {
    this.clear()
  }

  clear() {
    this.letters = {
      'A': 9, 'B': 2, 'C': 2, 'D': 4, 'E': 12, 'F': 2,
      'G': 3, 'H': 2, 'I': 9, 'J': 1, 'K': 1, 'L': 4,
      'M': 2, 'N': 6, 'O': 8, 'P': 2, 'Q': 1, 'R': 6,
      'S': 4, 'T': 6, 'U': 4, 'V': 2, 'W': 2, 'X': 1,
      'Y': 2, 'Z': 1, '_': 2
    }
    this.uniqueValues = []
    this.amountsWithLetters = []
  }

  scrabbleTileAmounts(value=Object.values(this.letters)) {
    for (let i = 0;  i < value.length; i++) {
      if(value.indexOf(value[i]) >= i) {
        this.uniqueValues.push(value[i])
      }
    }
    return this.uniqueValues.sort( (a, b) => b > a)
  }

  adjustLetterAmounts(playedLetters='Î') {
    let playedLetterArray = playedLetters.toUpperCase().split("")
    playedLetterArray.forEach(key => {
      if(typeof(this.letters[key])==='number') {
      this.letters[key] <= 0 ? 0 : this.letters[key]--
    }
    })
    return Object.values(this.letters)
  }

  buildArray(updatedValues=[]) {
    let keys = Object.keys(this.letters)
    this.scrabbleTileAmounts(updatedValues)
    this.uniqueValues.forEach(value => {
      let valueArray = []
      valueArray.push(value + ": ")
      for (var key of keys) {
        if(this.letters[key] === value) {
          valueArray.push(key)
        }
      }
      this.amountsWithLetters.push(valueArray)
    })
  }
}

module.exports = new ScrabBag()
