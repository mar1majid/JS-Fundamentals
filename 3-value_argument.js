const args = process.argv.slice(2); // gets only the user-passed arguments

if (args[0] === undefined) {
    console.log("No argument");
} else {
    console.log(args[0]);
}