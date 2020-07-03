// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//   if (n < 0) {
//     const revNeg = '-' + n.toString().split('').filter(char => char !== '-').reverse().join('')
//     return parseInt(revNeg)
//   }
//   return parseInt(n.toString().split('').reverse().join(''))
// }

function reverseInt(n) {
  const rev = n.toString().split('').reverse().join('')
  return parseInt(rev) * Math.sign(n)
}

module.exports = reverseInt;
