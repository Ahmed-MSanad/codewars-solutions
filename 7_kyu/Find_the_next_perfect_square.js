// Return the next square if sq is a perfect square, -1 otherwise

function findNextSquare(sq) {
    let sqrt = Math.sqrt(sq);
    if(sqrt === Math.trunc(sqrt)){
        sqrt++;
      return sqrt * sqrt;
    }
    return -1;
}

// OR:

function findNextSquare(sq) {
    return Number.isInteger(Math.sqrt(sq)) ? Math.pow(Math.sqrt(sq)+1, 2) : -1;
}


// OR:

function findNextSquare(sq) {
    return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq)+1,2);
}
