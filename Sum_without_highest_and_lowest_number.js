// Problem Link
// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

function sumArray(array) {
  if (!Array.isArray(array) || array.length < 3) return 0;
  else {
    var minVal = Math.min(...array);
    var maxVal = Math.max(...array);
    var SumAll = array.reduce((acc, curr) => acc + curr, 0);
    return SumAll - minVal - maxVal;
  }
}

/* 
test cases:
console.log(sumArray(undefined));
console.log(sumArray([-6, -20, -1, -10, -12]));
console.log(sumArray([-6, 20, -1, 10, -12]));
console.log(sumArray([])); 
*/
