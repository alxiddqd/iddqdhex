/* const factorial = (n) => {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

const howManySwaps = factorial(12);

console.log(howManySwaps);

const sequenceSum = (begin, end) => {
    if (begin === end){
      return end;
    } else if (begin > end){
      return NaN;
    }
    return begin + sequenceSum(begin + 1, end);
  };

const result = sequenceSum(-1, 5);

console.log('the sum of all numbers is ' + result);

const smallestDivisor = (num) => {
    
    const startDivisor = 2;
  
    const executor = (divisor) => {
        if (num % divisor === 0){
            return divisor;
        } else if (num === divisor || num === 1){
            return num;
        } else {
            return executor(divisor + 1);
        }
    };
    return executor(startDivisor);
    
  };

  console.log(smallestDivisor(21));

  const smallestDivisor2 = (num) => {
         
    if (num === 1){
        return num;
    } else if (num <= 0){
        return NaN;
    }
    
    let divisor = 2;

    while (num % divisor != 0){
          divisor = divisor + 1;
      }

    return divisor;
  }

  console.log(smallestDivisor2(17)); */

  const reverse = (str) => {
      result = "";
      i = str.length;

      while (i >= 0){
          result = result + str[i];
          i = i - 1;
      }
  }

  console.log("hello!");