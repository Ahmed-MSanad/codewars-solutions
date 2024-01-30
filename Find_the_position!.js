function position(letter){
    // return `Position of alphabet: ${"abcdefghijklmnopqrstuvwxyz".indexOf(letter) + 1}`;
    return `Position of alphabet: ${letter.charCodeAt() - "a".charCodeAt() + 1}`;
}

console.log(position("a"));