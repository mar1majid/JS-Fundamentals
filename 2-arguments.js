const args = process.argv.slice(2); // gets only the user-passed arguments
let count = args.length;

if (count === 0) {
    console.log("No argument");
} else if (count === 1) {
    console.log("Argument found");
} else {
    console.log("Arguments found");
}