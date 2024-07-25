// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
// remember iterable can be a string or an array

var uniqueInOrder=function(iterable){
    return Array.from(iterable).filter((_, idx, arr) => arr[idx] != arr[idx+1]);
}


// OR:


var uniqueInOrder=function(iterable){
    return [...iterable].filter((item, idx, arr) => item !== arr[idx-1]);
}