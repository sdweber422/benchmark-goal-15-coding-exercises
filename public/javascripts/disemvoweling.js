const disemvoweling = (stringToParse='') => {
  let regEx = /[^\Waeiou_]/ig
  let parsedString = stringToParse.match(regEx)
    if(parsedString != null) {
      return parsedString.join('').toLowerCase()
    }
  return ''
}

module.exports = disemvoweling
