const args = process.argv[2]; // gets only the user-passed arguments

let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);

function add(a, b) {

    if (isNaN(a) || isNaN(b)) {
        console.log('NaN');
    }
    else {
        let sum = a + b;
        console.log(sum);
    }
}

add(a, b);