function cake(x, y){
    let sum = 0;

    for(let i = 0; i < y.length; i++) {
        if(i % 2 == 0) {
            sum += y.charCodeAt(i);
        } else {
            sum += y.charCodeAt(i) - 96;
        }
    }

    if(Math.round(x * 0.7) < sum) return "Fire!";
    return "That was close!";
}

alert(cake(900, 'abcdef'));
alert(cake(56, 'ifkhchlhfd'));
alert(cake(256, 'aaaaaddddr'));