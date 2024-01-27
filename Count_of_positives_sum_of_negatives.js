function countPositivesSumNegatives(input) {
    if(input === null || input.length === 0)return [];
    let countOfPositives = input.filter(value => value > 0).length;

    let sumOfNegatives = input.filter(value => value < 0)
    .reduce((acu,cur) => acu + cur);

    return [countOfPositives,sumOfNegatives];
}