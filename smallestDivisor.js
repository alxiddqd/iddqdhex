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