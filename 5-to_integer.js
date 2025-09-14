const args = process.argv.slice(2); // gets only the user-passed arguments

const myNumber = parseInt(args[0]);

if (isNaN(myNumber)) {
    console.log("Not a number")
} else {
    console.log("My number: " + myNumber);

}
