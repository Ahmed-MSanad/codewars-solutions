// function domainName(url) {
//     url = url.replace("http://","");
//     url = url.replace("https://","");
//     url = url.replace("www.","");
//     return url.split('.')[0];
// }

// console.log(domainName("https://www.cnet.com"));
// console.log(domainName("http://www.zombie-bites.com"));
// console.log(domainName("http://github.com/carbonfive/raygun"));
// console.log(domainName("https://google.co.com/carbonfive/raygun"));



// //////////////////////////////////////////////


// Sort_the_Gift_Code
// Write a function that accepts a string and returns a string 
// containing the same characters in alphabetical order.
function sortGiftCode(code){
    return [...code].sort().join``;
    return code.split('').sort().join('');
}


// //////////////////////////////////////////////


// Factorial_division:
// - n and d will be positive BigInts, and also n > d. No need to check any of that
function factorialDivision(n, d) {
    let result = 1n;
    while(n > d){
    result *= n;
    n--;
    }
    return result;
}


// OR

const factorialDivision = (n, d) =>
    n <= d ? 1n : n * factorialDivision(n - 1n, d);




// //////////////////////////////////////////////

// Number_Pairs

function getLargerNumbers(a, b) {
    return a.map((val,idx) => {return val >= b[idx] ? val : b[idx]});
}


// //////////////////////////////////////////////

// Simple_Fun_#240:_Increasing_Number

function increasingNumber(x, n) {
    for(let i = 1 ; i <= n ; i++){
    if(x % i != 0){
        x += (i - x % i);
    }
    }
    return x
}

// //////////////////////////////////////////////


// Simple_Fun_#347:_Bulb_Maze_I

function bulbMaze(maze) {
    let x_flag = true;
    for(let i = 0 ; i < maze.length ; i++){
        if(x_flag){
            if(maze[i] == 'o'){return false;}
        }
        else{
            if(maze[i] == 'x'){return false;}
        }
        x_flag ^= true;
    }
    return true;
}

// OR

function bulbMaze(maze) {
    return [...maze].every((v,i) => v!=="ox"[i&1]);
}

// OR

const bulbMaze = map => [].every.call( map, (v,i) => {return v!=="ox"[i&1];} );
// .call(map, ...) is calling the every method with map as its this context.
// i = 0 , v != 'o' => i = 1 , v != 'x' => i = 2 , v != 'o' => ....


// //////////////////////////////////////////////


// 3_powers_of_2

function threePowers(n) {
    return n > 2 && n.toString(2).match(/1/g).length <= 3;
}



// //////////////////////////////////////////////


// Simple_Fun_#176:_Reverse_Letter

function reverseLetter(str) {
    return str.match(/[^\d\W_\s]/g).reverse().join('');
}


// //////////////////////////////////////////////

// The_highest_profit_wins!

function minMax(arr){
    return [Math.min(...arr),Math.max(...arr)];
}


// //////////////////////////////////////////////


// Merge_overlapping_strings

function mergeStrings(first, second){
    for(let i = 0 ; i < first.length ; i++){
        let x = first.substr(i);
        if(second.match(x) && second.startsWith(x)){
            return first + second.substr(first.length-i);
        }
    }
    return first + second;
}


// OR

function mergeStrings(first, second){
    return (first + ' ' + second).replace(/(.*) \1/, '$1');
}


// //////////////////////////////////////////////


