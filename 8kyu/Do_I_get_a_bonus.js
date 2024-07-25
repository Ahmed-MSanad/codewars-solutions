function bonusTime(salary, bonus) {
    return bonus ? `\u00A3${salary * 10}` : `\u00A3${salary}`;
}

console.log(bonusTime(10,0));