const length = str => str.length;
const toUpperCase = str => str.toUpperCase();


const bigLettersCount = (str) => {

    let strLenght = length(str);
    let count = 0;

    for (let i = 0; i < strLenght; i++) {
        if (toUpperCase(str[i]) === str[i]){
            count += 1;
        }
    }

    return count;
};

const compare = (first, second) => {
    const firstCount = bigLettersCount(first);
    const secondCount = bigLettersCount(second);

    let calc = firstCount - secondCount;
    
    if (calc > 0) {
        return 1;
    } else if (calc < 0) {
        return -1;
    }
    return 0;
};






const greaterThan = (first, second) =>
    compare(first, second) === 1;

const lessThan = (first, second) =>
    compare(first, second) === -1;

const isEqual = (first, second) =>
    compare(first, second) === 0;

console.log(isEqual("AAss", "AAsss"));