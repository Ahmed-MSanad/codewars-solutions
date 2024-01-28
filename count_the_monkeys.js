function monkeyCount(n) {
    // return Array.from({length:n}, (_,idx) => idx + 1);
    // return Array.from(Array(n), (_,idx) => ++idx);
    // return [...Array(n).keys()].map(val => val + 1);
    return [...Array(n+1).keys()].slice(1);
}

console.log(monkeyCount(10));
