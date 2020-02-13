String.prototype.isLetter = function() {
    return /^[aeiou]{1}$/i.test(this);
    };

    alert("".isLetter());
    alert("a".isLetter());
    alert("X".isLetter());
    alert("7".isLetter());
    alert("*".isLetter());
    alert("ab".isLetter());
    alert("a\n".isLetter());