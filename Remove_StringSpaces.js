function noSpace(x){
    // return x.split(" ").filter(val => val).join(""); // filter is not required
    // return x.split(" ").join("");
    // return x.replaceAll(' ','');
    return x.replace(/\s/g, ''); // using regular expression
}
console.log(noSpace("         Ahmed  Mahmoud        sanad     "));
