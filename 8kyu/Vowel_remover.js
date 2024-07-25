function shortcut (string) {
    // const vowels = ['a', 'e', 'i', 'o', 'u'];
    // return string.split("").filter(char => !vowels.includes(char)).join("");

    // const vowels = ['a', 'e', 'i', 'o', 'u'];
    // vowels.forEach(v => string = string.replaceAll(v,''));
    // return string;

    // return string.split("").filter(v => ['a', 'e', 'i', 'o', 'u'].indexOf(v) === -1).join("");

    // return string.split("").filter(v => !['a', 'e', 'i', 'o', 'u'].includes(v)).join("");

    // return string.split("").filter(v => !'aeiou'.includes(v)).join("");

    return string.replace(/[euioa]/g, '');
}

console.log(shortcut("hello codewars goodbye HELLO"));
