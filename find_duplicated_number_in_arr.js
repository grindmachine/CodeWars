function findDup( arr ){

    for(let i = 1; i < arr.length; i++) {
        let counterIncludes = 0;

        for( let j = 0; j < arr.length; j++) {
            if(arr[j] == i) counterIncludes++;
        }

        if(counterIncludes == 2) return i;

    }
    }

    alert(new Number(12));