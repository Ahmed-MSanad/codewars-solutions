function stringy(size) {
    // return [...Array(size)].reduce((acu,_,i) => !(i%2) ? acu+"1" : acu+"0", "");
    // return Array.from({length: size}).reduce((acu,_,i) => !(i%2) ? acu+`1` : acu+`0`, ``);
    // return "10".repeat(size).slice(0,size);
    // return new Array(size).join('10').substring(0,size);
    // return ''.padStart(size,`10`);
    return ''.padEnd(size,`10`);
}

// console.log(stringy(7));