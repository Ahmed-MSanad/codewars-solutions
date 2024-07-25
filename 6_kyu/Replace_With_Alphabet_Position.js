function alphabetPosition(text) {
    return [...text.toLowerCase()].map((item) => (item.charCodeAt() - 97 >= 0 && item.charCodeAt() - 97 <= 25) ? item.charCodeAt() - 96 : undefined).filter((item) => item).join(" ");
    // OR:
    return text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt() - 64).join(' ');
}
