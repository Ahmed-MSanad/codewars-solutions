function rentalCarCost(d) {
    // return d >= 7 ? (d*40-50) : d >= 3 ? (d*40-20) : d*40; // solution (1)
    return d*40 - (d > 6 ? 50 : d > 2 ? 20 : 0); // solution (2)
}