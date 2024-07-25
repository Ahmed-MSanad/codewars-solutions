function remove2(string) {  
    while(string.endsWith('!')){
        string = string.slice(0,-1);
    }
    return string;
}
console.log(remove2("!!Hi!!!!"));