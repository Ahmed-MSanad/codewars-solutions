function basicOp1(operation, value1, value2){
    return operation == '+' ? value1 + value2 :
    operation === '-' ? value1 - value2 : 
    operation === '*' ? value1 * value2 :
    value1 / value2;
}

function basicOp2(operation, value1, value2){
    return eval(value1 + operation + value2);
}