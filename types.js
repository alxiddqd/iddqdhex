const identity = str => str;
const length = str => str.length;


 
const Sum = (num) => {

    let string = String(num);
    let result = 0;

    for (let i = 0; i < string.length; i += 1){
        result = result + Number(string[i]);
    }
    return result;
}

const addDigits = (num) => {
    
    let starter = Sum(num);

    if (num < 10){
        return num;
    };
    
     while (starter >= 10) {
        starter = Sum(starter);
        };
    return starter;
}

console.log(addDigits(598997686567));