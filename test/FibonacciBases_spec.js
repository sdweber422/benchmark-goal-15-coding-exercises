const FibonacciBase = require('../public/javascripts/FibonacciBase')
const expect = require('chai').expect

describe('FibonacciBase', function() {
  let fibonacciInstance
  beforeEach(function() {
    fibonacciInstance = new FibonacciBase()
  })
  describe('#fibonacci(array)', function() {
    it('should return an array of two numbers', function() {
      let fibonacci = fibonacciInstance.fibonacci([])
      expect(fibonacci).to.be.an('array')
      expect(fibonacci).to.have.length.of.at.least(2)
      expect(fibonacci).to.have.length.of.at.most(2)
      expect(fibonacci[0]).to.be.a('number')
      expect(fibonacci[1]).to.be.a('number')
    })
    it('should return an array containing second number given and the addition of the two inputs', function() {
      let fibonacci = fibonacciInstance.fibonacci([2,3])
      expect(fibonacci).to.eql([3,5])
    })
  })

  describe('#decimalToFibonacci(decimal)', function() {
    it('should take a decimal number and return a string - a binary based on the Fibonacci sequence', function() {
      expect(fibonacciInstance.decimalToFibonacci(21)).to.eql('1100000')
      expect(fibonacciInstance.decimalToFibonacci(36)).to.eql('100000100')
      expect(fibonacciInstance.decimalToFibonacci(2)).to.eql('11')
    })
    it('should handle large numbers', function() {
      expect(fibonacciInstance.decimalToFibonacci(239994848596)).to.eql('10000010000100101010010100000010010000101010000010000100')
    })
    it('should eliminate any values to the right of the decimal point and use the remaining integer', function() {
      expect(fibonacciInstance.decimalToFibonacci(21.99)).to.eql('1100000')
    })
    it('should return an empty string for values of 0', function() {
      expect(fibonacciInstance.decimalToFibonacci(0)).to.eql('')
    })
    it('should return a string with two options if the ending two characters are interchangeable', function() {
      expect(fibonacciInstance.decimalToFibonacci(33)).to.eql('10101010 or 10101001')
      expect(fibonacciInstance.decimalToFibonacci(22)).to.eql('10000010 or 10000001')
    })
    it('should return an error message if the input is negative or NaN', function() {
      expect(fibonacciInstance.decimalToFibonacci('Hello')).to.eql('Invalid entry, please enter a decimal value')
      expect(fibonacciInstance.decimalToFibonacci(-5)).to.eql('Invalid entry, please enter a decimal value')
    })
  })

  describe('#fibonacciToDecimal(String fibonacciBase)', function() {
    it('should return the decimal equivalent of the given binary fibonacci', function() {
      expect(fibonacciInstance.fibonacciToDecimal('1')).to.eql(1)
      expect(fibonacciInstance.fibonacciToDecimal('1111')).to.eql(7)
      expect(fibonacciInstance.fibonacciToDecimal('11110001001')).to.eql(203)
    })
    it('should be able to handle large binary Fibonacci base strings', function() {
      expect(fibonacciInstance.fibonacciToDecimal('10000010000100101010010100000010010000101010000010000100')).to.eql(239994848596)
    })
    it('should return an error message if any section of the input is not a 1 or 0', function() {
      expect(fibonacciInstance.fibonacciToDecimal('-1')).to.eql('Invalid entry, please enter a binary-form Fibonacci base')
      expect(fibonacciInstance.fibonacciToDecimal('ABC')).to.eql('Invalid entry, please enter a binary-form Fibonacci base')
      expect(fibonacciInstance.fibonacciToDecimal('112')).to.eql('Invalid entry, please enter a binary-form Fibonacci base')
      expect(fibonacciInstance.fibonacciToDecimal('9991')).to.eql('Invalid entry, please enter a binary-form Fibonacci base')
    })
  })
})
