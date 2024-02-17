function updateLight(current) {
    // switch(current){
    //     case `green`:
    //         return `yellow`
    //     case `yellow`:
    //         return `red`
    //     case `red`:
    //         return `green`
    // };

    return{
        red: `green`,
        yellow: `red`,
        green: `yellow`
    }[current];
}