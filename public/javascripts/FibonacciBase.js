class FibonacciBase {

  fibonacci([number1=0, number2=1]) {
    let fibonacciLoopResult = number1 + number2
    return [number2, fibonacciLoopResult]
  }

  decimalToFibonacci(decimalValue=0) {
    if(isNaN(decimalValue) || decimalValue < 0) {
      return 'Invalid entry, please enter a decimal value'
    }
    let roundedDecimal = Math.floor(decimalValue)
    let fibonacciArray = []
    let fibResult = [0,1]
    let fibonacciBaseNumber = ''
    let decimalConvertedToFibonacci = 0
    if(roundedDecimal === 1) { return '10 or 01' }
    while(fibResult[1] < roundedDecimal ) {
      fibResult = this.fibonacci(fibResult)
      fibonacciArray.push(fibResult[0])
    }
    fibonacciArray.reverse().pop()
    fibonacciArray.forEach(number => {
      if(number === 1) {
        if(roundedDecimal === 2) {
          fibonacciBaseNumber = `${fibonacciBaseNumber}11`
        }
        else if(roundedDecimal === 1){
          fibonacciBaseNumber = `${fibonacciBaseNumber}10 or ${fibonacciBaseNumber}01`
        }
        else if(roundedDecimal === 0) {
          fibonacciBaseNumber = `${fibonacciBaseNumber}00`
        }
        roundedDecimal = 0
      }
      else if(number <= roundedDecimal) {
        fibonacciBaseNumber += '1'
        roundedDecimal -= number
      }
      else {
        fibonacciBaseNumber += '0'
      }
    })
    return fibonacciBaseNumber
  }

  fibonacciToDecimal(fibonacciBase='0') {
    let fibResult = []
    let rightmostBit
    let fibonacciConvertedToDecimal = 0
    while(fibonacciBase) {
      fibResult = this.fibonacci(fibResult)
      rightmostBit = fibonacciBase.slice(-1)
      if(rightmostBit === '1') {
        fibonacciConvertedToDecimal += fibResult[0]
      }
      else if(rightmostBit !== '0') {
        return 'Invalid entry, please enter a binary-form Fibonacci base'
      }
      fibonacciBase = fibonacciBase.slice(-99, -1)
    }
    return fibonacciConvertedToDecimal
  }
}

module.exports = FibonacciBase
