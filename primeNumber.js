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

console.log(isPrime(2));