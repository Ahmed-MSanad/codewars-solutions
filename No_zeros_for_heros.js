function noBoringZeros(n) {
    // while(n && !(n%10)){n /= 10;}
    // return n;

    // return n && !(n%10) ? noBoringZeros(n/10) : n;

    return Number(String(n).replace(/0+$/,''));
}

console.log(noBoringZeros(-1050000));