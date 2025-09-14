const args = process.argv[2]; // gets only the user-passed arguments

const input = parseInt(process.argv[2]);

if (isNaN(input)) {
    console.log('Missing number of occurrences');
    // process.exit();

}

for (let i = 0; i < input; i++) {
    console.log("C is fun");
    if (input < 0) {
        process.exit(0);
    }
}