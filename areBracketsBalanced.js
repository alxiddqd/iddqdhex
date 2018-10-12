const areBracketsBalanced = (str) => {
    let a = 0;
    let b = 0;

    for (let i = 0; i < str.length; i += 1){
       if (str[i] == "(" && str[i-1] == ")"){
           return false;
       }
       else if (str[i] == "("){
           a += 1;
       } 
       else {
           b += 1;
       }
    }
    if (a === b){
        return true;
    } 

    return false; 
}

console.log(areBracketsBalanced("((()))"))