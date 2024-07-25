// Problem Link
// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

// First Solution:
function sumArray(array) {
  if (!Array.isArray(array) || array.length < 3) return 0;
  else {
    var minVal = Math.min(...array);
    var maxVal = Math.max(...array);
    var SumAll = array.reduce((acc, curr) => acc + curr, 0);
    return SumAll - minVal - maxVal;
  }
}

// Second Solution:
function sumArray(array) {
  if (array == null) return 0;
  else {
    return array
      .sort((a, b) => a - b)
      .slice(1, -1)
      .reduce((container, currVal) => container + currVal, 0);
  }
}

/* 
test cases:
console.log(sumArray(undefined));
console.log(sumArray([-6, -20, -1, -10, -12]));
console.log(sumArray([-6, 20, -1, 10, -12]));
console.log(sumArray([])); 
*/
