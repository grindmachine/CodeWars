function isPalindrome(line) {
    line = "" + line;
    
    let maxI;
    maxI = Math.floor(line.length / 2);

    for(let i = 0, j = line.length - 1; i < maxI; i++, j--) {
        if(line[i] != line[j]) return false;
    }

    return true;
}

alert(isPalindrome("anna"));
alert(isPalindrome("walter"));
alert(isPalindrome(12321));   
alert(isPalindrome(123456));