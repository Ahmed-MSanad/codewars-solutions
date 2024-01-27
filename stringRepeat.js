StringRepeat = (n, s) => s.repeat(n); // using repeat built-in method

StringRepeat = (n, s) => n > 0 ? s + StringRepeat(n-1,s) : ''; // recursive way

function repeatStr (n, s) {
    let ss = "";
    for(let i = 0 ; i < n ; i++){
        ss += s; // add the s , n times to the empty string ss.
    }
    return ss;
}


console.log(StringRepeat(4,"Palestine"));

