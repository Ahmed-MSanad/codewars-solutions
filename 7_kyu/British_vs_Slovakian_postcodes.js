function whichPostcode(postcode){
    postcode = postcode.trim();
    let britishRegex = /^[a-zA-Z]{1,2}\d\d?\s\d[a-zA-Z]{2}$/;
    let slovakianRegex = /^[\d]{3}[\s][\d]{2}$/
    if(britishRegex.test(postcode))
    return "GB";
    else if(slovakianRegex.test(postcode))
    return "SK"
    return "Not valid";
}

// OR

function whichPostcode(postcode){
    postcode = postcode.trim();
    let britishRegex = /^[a-zA-Z]{1,2}[\d]{1,2}[\s][\d][\w]{2}$/;
    let slovakianRegex = /^[\d]{3}[\s][\d]{2}$/
    if(britishRegex.test(postcode))
    return "GB";
    else if(slovakianRegex.test(postcode))
    return "SK"
    return "Not valid";
}

// OR

function whichPostcode(postcode){
    postcode = postcode.trim();
    return (/^[a-zA-Z]{1,2}\d\d?\s\d[a-zA-Z]{2}$/.test(postcode) ? "GB" : /^[\d]{3}[\s][\d]{2}$/.test(postcode) ? "SK" : "Not valid");
}

// OR

function whichPostcode(postcode){
    return (/^\s*[a-zA-Z]{1,2}\d\d?\s\d[a-zA-Z]{2}\s*$/.test(postcode) ? "GB" : /^\s*[\d]{3}[\s][\d]{2}\s*$/.test(postcode) ? "SK" : "Not valid");
}
