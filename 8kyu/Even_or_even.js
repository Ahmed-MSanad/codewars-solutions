// First Form of the solution:
function evenOrOdd(number) {
  if (number & 1) {
    return `Odd`;
  } else {
    return `Even`;
  }
}
// Second Form of the solution:
function evenOrOdd(number) {
  return number & 1 ? "Odd" : "Even";
}
