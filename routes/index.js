const express = require('express');
const router = express.Router();
const numberGuesser = require('../public/javascripts/NumberGuesser')
const ScrabbleBag = require('../public/javascripts/ScrabbleBag')
const StringIndices = require('../public/javascripts/StringIndices')

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

router.get('/stringIndices', function(request, response, next) {
  const { stringToParse, index } = request.query
  const stringEntry = new StringIndices(stringToParse)
  const wordAtPosition = stringEntry.getWordAtIndex(index)
  response.render('stringIndices', {
    stringToParse: stringToParse,
    returnedWord: wordAtPosition,
    index: index
  })
})

module.exports = router;
``
