const square = (a) => a * a;
const sumOfSquares = (a, b) => square(a) + square(b);
const squareSumOfSquares = (a, b) => square(sumOfSquares(a, b));

console.log(squareSumOfSquares(-3, 7));