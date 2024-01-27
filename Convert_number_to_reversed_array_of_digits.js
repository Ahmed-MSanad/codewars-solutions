function digitize1(n){
    let retArr = [];
    while(n > 0){
        retArr.push(n % 10);
        n = parseInt(n / 10);
    }
    return retArr;
}

console.log(digitize1(35231));


// ------------ Another Solution ----------------
// transfer to string to use split to get an array then reverse it then transfer each char to digit


function digitize2(n) {
    return n.toString().split("").reverse().map(Number);
}

console.log(digitize2(35231));

// ------------ Another Solution ----------------
// transfer to string to use split to get an array then reverse it then transfer each char to digit


function digitize3(n) {
    return Array.from(String(n), Number).reverse();
}
console.log(digitize3(35231));