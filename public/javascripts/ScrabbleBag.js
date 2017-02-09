const _letterBag = new WeakMap()
const _keys = new WeakMap()
const _values = new WeakMap()
const _distinctValues = new WeakMap()
const _amountsWithLetters = new WeakMap()
const _errors = new WeakMap()

class ScrabbleBag {

  constructor() {
    _letterBag.set(this, {
      'A': 9, 'B': 2, 'C': 2, 'D': 4, 'E': 12, 'F': 2,
      'G': 3, 'H': 2, 'I': 9, 'J': 1, 'K': 1, 'L': 4,
      'M': 2, 'N': 6, 'O': 8, 'P': 2, 'Q': 1, 'R': 6,
      'S': 4, 'T': 6, 'U': 4, 'V': 2, 'W': 2, 'X': 1,
      'Y': 2, 'Z': 1, '_': 2
    })
    _keys.set(this, Object.keys(_letterBag.get(this)))
    _values.set(this, Object.values(_letterBag.get(this)))
    _distinctValues.set(this, [])
    _amountsWithLetters.set(this, [])
    _errors.set(this, [])
  }

  tileAmounts(values=_values.get(this)) {
    let distinctValues = _distinctValues.get(this)
    values.filter( (value, index) => {
      if(values.indexOf(value) >= index) {
        distinctValues.push(value)
      }
    })
    return distinctValues.sort( (a, b) => b > a)
  }

  removeTiles(playedLetters='Î') {
    let letterBag = _letterBag.get(this)
    let errors = _errors.get(this)
    playedLetters.toUpperCase().split("").filter(key => {
      typeof(letterBag[key])==='undefined'
        ? errors.push(`${key} does not exist in this Scrabble Bag`)
        : letterBag[key] === 0
          ? errors.push(`You entered ${key} more times than it exist in database`)
          : letterBag[key] - 1 < 0
            ? letterBag.key = 0
            : letterBag[key]--
    })
    return letterBag
  }

  displayTiles() {
    _values.set(this, Object.values(_letterBag.get(this)))
    this.tileAmounts(_values.get(this))
    let keys = _keys.get(this)
    let letterBag = _letterBag.get(this)
    let distinctValues = _distinctValues.get(this)
    let amountsWithLetters = _amountsWithLetters.get(this)
    distinctValues.forEach(value => {
      let valueArray = []
      valueArray.push(value + ": ")
      for (var key of keys) {
        if(letterBag[key] === value) {
          valueArray.push(key)
        }
      }
      amountsWithLetters.push(valueArray)
    })
    return amountsWithLetters
  }

  error() {
    return _errors.get(this)
  }
}

module.exports = ScrabbleBag
