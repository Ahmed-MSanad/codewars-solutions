function countSheeps1(sheep) {
    return sheep.filter(value => value == true).length;
}

console.log(countSheeps1([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]));

// ------------------- Another Solution --------------------- //


function countSheeps2(sheep) {
    return sheep.filter(Boolean).length;
}

console.log(countSheeps2([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]));
