const reverse = (str) => {
    let result = "";
    let i = str.length - 1;

    for (; i >= 0; i--){
        result += str[i];
        
    }
    return result;
}

console.log(reverse("аллилуйя"));