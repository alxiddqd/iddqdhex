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

  console.log(smallestDivisor2(17));