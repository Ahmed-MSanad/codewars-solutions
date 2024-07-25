// Problem link
// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

// First Solution:
function positiveSum(arr) {
  var result = 0;
  for (var counter = 0; counter < arr.length; counter++) {
    if (arr[counter] > 0) {
      result += arr[counter];
    } else {
    }
  }
  return result;
}

// Second Solution:

function positiveSum(arr) {
  return arr
    .filter((x) => x > 0)
    .reduce((container, currValue) => container + currValue, 0);
}
