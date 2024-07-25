
function openOrSenior(data){
    return data.map((item) => (item[0] >= 55 && item[1] > 7) ? "Senior" : "Open");
}

// using Array destructing:

function openOrSenior(data){
    return data.map(([age, handicap]) => (age >= 55 && handicap > 7) ? "Senior" : "Open");
}