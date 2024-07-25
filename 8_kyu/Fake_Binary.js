function fakeBin(x){
    // return x.split("").map(v => v >= '5' ? '1' : '0').join("");
    return [...x].reduce((a,b)=>a+(~~(+b/5)),"");
}

// console.log(fakeBin("72561"));