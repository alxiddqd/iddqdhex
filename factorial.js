const factorial = (n) => {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

const howManySwaps = factorial(10);

console.log(howManySwaps);

  





