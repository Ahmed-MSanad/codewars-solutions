function isPalindrome(x) {
    // return x.toLowerCase() === x.split("").reverse().join("").toLowerCase();
    return x.toLowerCase() === [...x].reverse().join("").toLowerCase();
}

function isPalindrome2(x, str = x.toLowerCase()){
    return str === [...str].reverse().join('');
}

console.log(isPalindrome2("abA"));