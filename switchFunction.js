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