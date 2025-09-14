const args = process.argv[2]; // gets only the user-passed arguments

let input = parseInt(process.argv[2]);


if (isNaN(input)) {
    console.log('Missing size');
    process.exit(0);
}

if (input < 0) {
    process.exit(0);
}

let x = "X".repeat(input);


for (let i = 0; i < input; i++) {

    console.log(x);
}