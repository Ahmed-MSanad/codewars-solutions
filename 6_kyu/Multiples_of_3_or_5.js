function solution(number){
    if(number <= 3)return 0;
    let set = new Set();
    for(let i = 3 ; i < number ; i += 3){set.add(i);}
    for(let i = 5 ; i < number ; i += 5){set.add(i);}
    return [...set].reduce((prevVal, current) => prevVal + current); 
}


// OR: 


function solution(number){
    return number < 1 ? 0 : [...new Array(number).keys()].filter(n => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b);
}