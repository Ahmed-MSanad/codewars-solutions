function invert(array) {
    return array.map(val => -val);
}

console.log(invert([1,2,3,4,5]));
console.log(invert([1,-2,3,-4,5]));