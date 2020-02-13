function removeChar(str){
    let modifiedStr = "";
    
    for(let i = 1; i < str.length - 1; i++) {
        modifiedStr += str[i];
    }

    return modifiedStr;
};

alert(removeChar("Hello"));