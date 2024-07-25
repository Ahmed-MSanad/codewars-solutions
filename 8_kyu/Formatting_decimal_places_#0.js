function twoDecimalPlaces1(n) {
    const arr = n.toString().split("");
    const floatingPoint = arr.indexOf('.');
    if(arr.splice(floatingPoint + 3).at(0) >= 5){
        let i = 1;
        while(arr[arr.length - i] != '.' && arr[arr.length - i] == '9'){
            arr[arr.length - i] = '0';
            i++;
        }
        if(arr[arr.length - i] === '.'){arr[arr.length - i - 1]++;}
        else{arr[arr.length - i]++;}
    }
    return Number(arr.join(""));
}


function twoDecimalPlaces2(n) {
    // return Math.round(n*100)/100;
    // return Number(n.toFixed(2));
    return Math.floor(n*10**2 + 0.5) / 100;
}

console.log(twoDecimalPlaces2(5.9989));
console.log(twoDecimalPlaces2(3.3424));