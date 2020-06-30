// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str.split('').reverse().join('')
// }

function reverse(str) {
  let newStr = ''
  for (let i = str.length - 1; i >= 0; i--) {
    newStr = newStr + str[i]
  }
  return newStr
}

module.exports = reverse;
