/*
    Sieve of Eratosthenes - The sieve of Eratosthenes is one of the most efficient ways
    to find all of the smaller primes (below 10 million or so).
*/

var sieve = function (n) {

    var array = [], primes = [], i, j;
    for (let i = 2; i <= n; i++){
        array.push(i);
    }
    for (let j = 2; j <= n; j++){
        if (array[j] != null){
            mark(j, array);
        }
    }
    for(let k = 0; k<array.length; k++){
        if (array[k] != null){
            primes.push(array[k]);
        }
    }
    return primes;
};

const mark = (p, arr) => {
    for (let i = 0; i<= arr.length; i++){
        if ((arr[i] % p == 0) && (arr[i] >= p*p)){
            arr[i] = null;
        }
    }
};
console.log('Prime numbers smaller than 50: ')
console.log(sieve(50));