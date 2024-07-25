function grow(x){
    // return x.reduce((acc, cur) => acc * cur, 1);

    return eval(x.join("*"));
}

console.log(grow([1,2,3,4]));