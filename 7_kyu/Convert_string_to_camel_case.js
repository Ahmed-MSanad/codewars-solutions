function toCamelCase(str){
    return [...str].filter((item, idx, arr) => {
        if(item === '_' || item === '-'){
            arr[idx+1] = arr[idx+1].toUpperCase();
            return false; 
        }else{return true;}
    }).join("");
}


// OR:


function toCamelCase(str){
    return str.replace(/[-_]\w/g,(item) => item[1].toUpperCase());
    return str.replace(/[-_](.)/g,(item) => item[1].toUpperCase());
}