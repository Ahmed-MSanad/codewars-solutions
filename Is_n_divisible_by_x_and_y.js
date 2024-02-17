function isDivisible(n, x, y) {
    // return (n % x === 0 && n % y === 0);

    return !(n%x || n%y);
}

// console.log(isDivisible(3,1,3));