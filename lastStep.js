const length = str => str.length;
const toUpperCase = str => str.toUpperCase();

const tryOut = (str) => {
    
    let newStr = " ";

    if (str[0] !== toUpperCase(str)){
        newStr = toUpperCase(str[0]);
    }
    for (let i = 1; i < str.length; i += 1){
        
        if (str[i-1] === " "){
            newStr += toUpperCase(str[i]);
        }
        
        else {
            newStr += str[i]
        }
    }
    return newStr;
}

console.log(tryOut(" many different words inside sentence"))