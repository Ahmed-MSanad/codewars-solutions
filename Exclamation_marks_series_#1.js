function remove1(string) {
    // return string.at(-1) === '!' ? string.slice(0,-1) : string;
    return string.endsWith('!') ? string.slice(0,-1) : string;
}

console.log(remove1("Ahmed!!"));