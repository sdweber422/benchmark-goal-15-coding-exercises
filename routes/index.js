const express = require('express');
const router = express.Router();
const numberGuesser = require('../public/javascripts/NumberGuesser')

/* GET home page. */
router.get('/', function(request, response, next) {
  const { guess, exit } = request.query
  if(guess == 'exit' || exit === 'exit') numberGuesser.clear()
  console.log('numberGuesser.attempts(guess)', numberGuesser.attempts(guess))
  response.render('index', { title: 'Express', attempts: numberGuesser.guesses });
});

module.exports = router;
