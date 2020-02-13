var isAnagram = function(test, original) {
    if(test.length != original.length) return false;

    test = test.toLowerCase();
    original = original.toLowerCase();

    for(let i = 0; i < test.length; i++) {
        original = original.replace(test[i], "");
    }

    if(original.length == 0) return true;
    return false;
};

alert(isAnagram("foefet", "toffee"));
alert(isAnagram("Buckethead", "DeathCubeK"));
alert(isAnagram("dumble", "bumble"));