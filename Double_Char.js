function doubleChar(str) {
    let doubledStrChar = "";
    for(let i = 0 ; i < str.length ; i++)
        doubledStrChar += str[i].repeat(2);

    return doubledStrChar;
}

function doubleChar2(str) {
    return str.split("").map((value,idx,arr) => arr[idx].concat(value)).join("");
}

function doubleChar3(str) {
    return str.split("").map((value) => value + value).join("");
}

function doubleChar4(str) {
    return str.split("").map((value) => value.repeat(2)).join("");
}
