function removeChar(str){
    // str = str.split("");
    // str.pop();
    // str.shift();
    // return str.join("");

    // return str.replace(/^./,'').replace(/.$/,'');

    // return str.slice(1,-1);

    // return str.substring(1, str.length-1);

    return str.substr(1, str.length-2);
};
console.log(removeChar("anzl2czz"));