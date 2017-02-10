const express = require('express');
const router = express.Router();
const numberGuesser = require('../public/javascripts/NumberGuesser')
const ScrabbleBag = require('../public/javascripts/ScrabbleBag')
const FibonacciBase = require('../public/javascripts/FibonacciBase')

/* GET home page. */
router.get('/', function(request, response, next) {
  const { guess, exit } = request.query
  if(guess === 'exit' || exit === 'exit') {
    numberGuesser.clear()
  }
  numberGuesser.attempt(guess)
  response.render('index', { title: 'Express', attempts: numberGuesser.guesses });
});

router.get('/scrabbleBag', function(request, response, next) {
  const { playedLetters, exit } = request.query
  const scrabbleBag = new ScrabbleBag()
  scrabbleBag.removeTiles(playedLetters)
  response.render('scrabbleBag', { results: scrabbleBag.displayTiles(), errors: scrabbleBag.error() })
})

router.get('/fibonacci', function(request, response, next) {
  let { decimalValue, fibonacciBase } = request.query
  let fibonacciInstance = new FibonacciBase()
  if(decimalValue) {
    decimalValue = fibonacciInstance.decimalToFibonacci(decimalValue)
  }
  if(fibonacciBase) {
    fibonacciBase = fibonacciInstance.fibonacciToDecimal(fibonacciBase)
  }
  response.render('fibonacci', {
    decimalValue: decimalValue,
    fibonacciBase: fibonacciBase
  })
})
module.exports = router;
