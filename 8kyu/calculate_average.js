function findAverage(array) {
    // return array.length ? array.reduce((acu,cur) => acu + cur, 0) / array.length : 0;
    return array.reduce((acu,cur) => acu + cur, 0) / array.length || 0;
}

console.log(findAverage([1,2,3]));
console.log(findAverage([]));