function printArray(array){
    let answer = "";
    array.forEach(item => {
        if(Array.isArray(item)){
            answer += `[`;
            item.forEach(val => {
                if(typeof val === "string"){answer += `"${val}",`;}
                else{answer += `${val},`;}
            });
            answer = answer.replace(/,+$/,'');
            answer += `],`;
        }
        else if(typeof item === "object"){
            answer += `${JSON.stringify(item)},`;
        }
        else{answer += `${item},`;}
    });
    answer = answer.replace(/,+$/,'');
    if(answer[0] === '[' || answer[0] === '{'){
        let x = [...answer];
        x.unshift('[');
        x.push(']');
        answer = x.join("");
    }
    return answer;
}
// console.log(printArray([["hello","this","is","an","array!"],["a","b","c","d","e!"]]));

// console.log(printArray([[1,2],["a","b"]]));

// console.log(printArray([{"firstName":"John","lastName":"Doe"},{"firstName":"Ruslan","lastName":"López"}]));
