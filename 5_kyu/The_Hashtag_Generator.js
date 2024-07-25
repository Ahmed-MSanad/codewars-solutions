/* function generateHashtag (str) {
    const answer = str.split(" ")
    .filter(v => v).map(v => v = v[0].toUpperCase().concat(v.slice(1)))
    .join("");

    return answer.length >= 140 || answer.length === 0 ? 
            false : `#${answer}`;
} */


function generateHashtag (str) {
    const answer = str.split(" ")
    .reduce((str,word) => str + word.substring(0,1).toUpperCase() + word.substring(1) , '#')

    return answer.length > 140 || answer.length === 1 ? 
            false : answer;
}


// console.log(generateHashtag("ahmed                   sanad"));
// console.log(generateHashtag(""));
// console.log(generateHashtag(" ".repeat(400)));
// console.log(generateHashtag("#"));
// console.log(generateHashtag(" Hello there thanks for trying my Kata"));


