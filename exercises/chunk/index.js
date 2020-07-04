// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   const result = []
//   const times = Math.ceil(array.length / size)
//   for (let i = 0; i < times; i++ ) {
//     let newArr = array.slice(i * size, i * size + size)
//     result.push(newArr)
//   }
//   return result
// }

function chunk(array, size) {
  let results = []
  for (let el of array) {
    const last = results[results.length - 1]
    if (!last || last.length === size) {
      results.push([el])
    } else {
      last.push(el)
    }

  }
  return results
}

//chunk([8, 9, 3, 4, 5], 2)
module.exports = chunk;
