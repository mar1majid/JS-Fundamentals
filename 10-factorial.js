const args = process.argv[2]; // gets only the user-passed arguments

let n = parseInt(process.argv[2]);


function factorial(input) {
    if (isNaN(input) || input <= 1) {
        return 1;

    }
    return input * factorial(input - 1)
}

console.log(factorial(n));