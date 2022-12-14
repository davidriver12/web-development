/*
    Prime Factorization - Have the user enter a number and find
    all Prime Factors (if there are any) and display them.
*/
const submitBtn = document.getElementById('submitBtn');
const inputField = document.getElementById('numberInput');
submitBtn.addEventListener('click', function(){
    let number = parseInt(inputField.value);
    let primeFactors = getPrimeFactors(number);
    console.log(`The prime factors of ${number} are:`)
    for (factor of primeFactors){
        console.log(factor)
    }
})

var getPrimeFactors = function (n) {
    "use strict";

    function isPrime(n) {
        var i;

        for (i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    var i, sequence = [];

    //TODO: Check which numbers are factors of n and also check if
    // that number also happens to be a prime
    for (let i = 2; i <= n/2; i++){
        if (n%i == 0 && isPrime(i)){
            sequence.push(i);
        }
    }

    return sequence;
};

// the prime factors for this number are: [ 2, 3, 5, 7, 11, 13 ]
console.log(getPrimeFactors(30030));