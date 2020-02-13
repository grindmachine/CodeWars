function count (string) {  
    let obj = new Object();
    
    for(let i = 0; i < string.length; i++) {
        if(obj.hasOwnProperty(string[i])) 
            obj[string[i]] ++;
        else 
            obj[string[i]] = 1;
    }
    return obj;
}

alert(count("aba").toString());
alert(count("").toString());