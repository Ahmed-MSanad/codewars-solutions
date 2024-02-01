var summation = function (num) {
    return num * (num + 1) >> 1;
    // return [...Array(num)].reduce((acu,_,idx) => acu + idx + 1, 0);
    // return Array.from(Array(num)).reduce((acu,_,idx) => acu + idx + 1, 0);
    // return Array(num).fill(-1).reduce((acu,_,idx) => acu + idx + 1, 0);

    // return Array(num).reduce((acu,_,idx) => acu + idx + 1, 0); // Can't work like this as the array is empty
}

// console.log(summation(8));