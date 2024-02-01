function squareSum(numbers){
    return numbers.reduce((acc,cur) => acc + cur * cur, 0);
}

console.log(squareSum([1, 2, 2]));