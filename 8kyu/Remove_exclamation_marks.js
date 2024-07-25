function removeExclamationMarks(s) {
    // return s.replaceAll('!','');
    // return s.split("").filter(c => c!='!').join("");
    return s.split('!').join("");
}

console.log(removeExclamationMarks("!!ahmed!! sanad!!"));
