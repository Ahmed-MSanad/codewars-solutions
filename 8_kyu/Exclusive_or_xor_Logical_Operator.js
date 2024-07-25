
function xor(a, b) {
    // return a&&!b || !a&&b ? true : false;
    // return a^b ? true : false;
    // return (a + b) & 1 ? true : false;
    return a!=b;
}

console.log(xor(0,0));