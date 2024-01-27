function squareOrSquareRoot1(array) {
    return array.map(value => Number.isInteger(Math.sqrt(value)) ? Math.sqrt(value) : value * value);
}

function squareOrSquareRoot2(array) {
    return array.map(value => Math.sqrt(value)%1 == 0 ? Math.sqrt(value) : value * value);
}