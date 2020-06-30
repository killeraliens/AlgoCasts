// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  const strArr = str.split('').reverse()
  let newStr = ''
  for (let i = 0; i < strArr.length; i++) {
    newStr = newStr + strArr[i]
  }
  return newStr
}

module.exports = reverse;
