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