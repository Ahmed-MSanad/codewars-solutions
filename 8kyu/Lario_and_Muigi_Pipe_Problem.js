function pipeFix(numbers){
    // return Array.from({length:numbers.at(-1) - numbers[0] + 1})
    //     .map((_,idx) => numbers[0] + idx);

    // // Array.from(array, mapFunction);
    // return Array.from({length:numbers.slice(-1) - numbers[0] + 1},
    //     ((_,idx) => numbers[0] + idx));

    // return [...Array(numbers[numbers.length - 1] - numbers[0] + 1)].
    // map((_, idx) => numbers[0] + idx);

    return Array(numbers.pop() - numbers[0] + 1).fill(0).map((_,i) => i + numbers[0]);
}

// console.log(pipeFix([-3,3,5,6,7,8]));