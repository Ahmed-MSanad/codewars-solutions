function sumMix(x){
    // return x.reduce((acu,cur) => acu + +cur , 0);
    return eval(x.join("+"));
}