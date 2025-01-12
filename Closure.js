function findMax (a) {
    return (b) => a > b ? a : b;
}

console.log(findMax(44)(10))