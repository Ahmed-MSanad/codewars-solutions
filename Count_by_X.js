function countBy1(x, n) {
    let z = [];
    for(let i = 1 ; i <= n ; i++){
        z.push(i*x);
    }
    return z;
}

function countBy2(x,n){
    return Array.from({length: n}, (v, k) => (k + 1) * x);
}

function countBy3(x,n){
    return [...Array(n)].map((_, idx) => ++idx * x);
}

function countBy4(x,n){
    return Array.from(Array(n).keys(), v => ++v * x);
}

function countBy5(x,n){
    return Array.from(Array(n+1).keys()).slice(1).map(v => v * x);
}

// console.log(countBy1(1,10));
// console.log(countBy2(2,5));
// console.log(countBy3(2,5));
// console.log(countBy4(2,5));
// console.log(countBy5(2,5));