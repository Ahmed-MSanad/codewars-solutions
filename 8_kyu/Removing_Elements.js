function removeEveryOther(arr){
    return arr.filter((v,i) => i%2 == 0);
}

function removeEveryOther1(arr){
    arr.forEach((_,idx) => arr.splice(idx + 1,1));
    return arr;
}

console.log(removeEveryOther1(["Keep", "Remove", "Keep", "Remove", "Keep"]));
