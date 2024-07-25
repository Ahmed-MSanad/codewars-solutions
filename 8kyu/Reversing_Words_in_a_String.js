function reverse(string){
    return string.trim().split(" ").reverse().join(" ");
}

console.log(reverse("      Hi There.          "));
