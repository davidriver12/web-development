
/*
    Fibonacci Sequence - Enter a number and have the program
    generate the Fibonacci sequence to that number or to the Nth number.
*/
// This array will keep memory of the previous fibonacci numbers
var memo = [1, 1];
function fibonacci() {
    var n = parseInt(document.getElementById("num").value);
    var val = f(n);
    document.getElementById("fibonacciLbl").textContent = val;
    return
    //return f;
}

function f(n) {

    var value;
    // Check if the memory array already contains the requested number
    if (memo.hasOwnProperty(n)) {
        value = memo[n];
    } else {
        //TODO: Implement the fibonacci function here!
        while(memo.length < (n-1)){
            let newValue = memo[memo.length-1] + memo[memo.length-2];
            console.log(newValue);
            memo.push(newValue);
        }
        value = memo[memo.length-1];
    }

    return value;
}
//console.log(fibonacci(15));