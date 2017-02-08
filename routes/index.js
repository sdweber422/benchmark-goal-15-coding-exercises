const express = require('express');
const router = express.Router();
const numberGuesser = require('../public/javascripts/NumberGuesser')
const scrabBag = require('../public/javascripts/ScrabBag')

/* GET home page. */
router.get('/', function(request, response, next) {
  const { guess, exit } = request.query
  if(guess === 'exit' || exit === 'exit') {
    numberGuesser.clear()
  }
  numberGuesser.attempt(guess)
  response.render('index', { title: 'Express', attempts: numberGuesser.guesses });
});

router.get('/scrabBag', function(request, response, next) {
  const { playedLetters, exit } = request.query
  scrabBag.clear()
  const adjustedAmounts = scrabBag.adjustLetterAmounts(playedLetters)
  scrabBag.buildArray(adjustedAmounts)
  response.render('scrabBag', { results: scrabBag.amountsWithLetters })
})

module.exports = router;
