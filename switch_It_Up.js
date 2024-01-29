function switchItUp1(number){
    switch(number){
        case 0:
            return `Zero`;
        case 1: 
            return `One`;
        case 2:
            return `Two`;
        case 3:
            return `Three`;
        case 4:
            return `Four`;
        case 5:
            return `Five`;
        case 6:
            return `Six`;
        case 7:
            return `Seven`;
        case 8:
            return `Eight`;
        case 9:
            return `Nine`;
    }
}

function switchItUp2(number){
    let answer;
    switch(number){
        case 0:
            answer = `Zero`;
        break;
        case 1:
            answer = `One`;
        break;
        case 2:
            answer = `Two`;
        break;
        case 3:
            answer = `Three`;
        break;
        case 4:
            answer = `Four`;
        break;
        case 5:
            answer = `Five`;
        break;
        case 6:
            answer = `Six`;
        break;
        case 7:
            answer = `Seven`;
        break;
        case 8:
            answer = `Eight`;
        break;
        case 9:
            answer = `Nine`;
    }
    return answer;
}

console.log(switchItUp1(9));
console.log(switchItUp2(9));

switchItUp3 = n => ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]
console.log(switchItUp3(4));