function processArray(arr, callback) {

    for(let i = 0; i < arr.length; i++) {
        arr[i] = callback(arr[i]);
    }
    
    return arr;
};

var myArray = [4, 8, 2, 7, 5];
myArray = processArray(myArray, function (a) {
    return a + 5;});


alert(myArray);