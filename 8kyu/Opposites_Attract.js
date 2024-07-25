function lovefunc(flower1, flower2){
    // return Boolean((flower1&1 && !(flower2&1)) || (flower2&1 && !(flower1&1)));
    // return flower1 % 2 != flower2 % 2;
    // return (flower1 + flower2) % 2 === 1;
    return !!((flower1 ^ flower2) % 2);
}


console.log(lovefunc(4,2));

console.log((4 % 2) != 0);