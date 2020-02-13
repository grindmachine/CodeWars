function squareDigits(num){
    let temp = num;
    let stringNum = new String(num);
    let squareStringNum = "";

    for(let i = 0; i < stringNum.length; i++) {
        squareStringNum += Math.pow(new Number(stringNum[i]), 2);
    }

    return Number.parseInt(squareStringNum);
}


alert(squareDigits(9119) instanceof Number);