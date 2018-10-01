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
      let result = "";
      let i = str.length - 1;

      for (; i >= 0; i--){
          result += str[i];
          
      }
      return result;
  }

  console.log(reverse("аллилуйя"));


let x = 5;
let y = 10;

console.log(x++ + ++y);

const trySwitch = (num) => {
    
    let answer = '';

    switch(num) {
        
        case 1:
        answer = "one";
        break;

        case 2:
        answer = "two";
        break;

        default:
        answer = "Nothing";
        break;
    }
    return answer;
}

console.log(trySwitch(3));

let a = 4;

a -= 8 - a;


let b = 10;
b += b ** 2 > 20 ? 1 : 10;


let c = 10;

c = c ** 2;

const isPrime = (num) => {

    if (num <= 1){
        return false;
    }

    for (let i = 1; i < num; i += 1){
      
          if (i > 1 && num % i === 0) {
            return false;
        }
        
}
    return true;
}

console.log(isPrime(17));

