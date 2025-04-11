const startTime = new Date().getTime();
// Your code here
const endTime = new Date().getTime();

// Calculate the difference in milliseconds between start and end times
const timeDifferenceMs = endTime - startTime;

console.log(`The program execution took ${timeDifferenceMs} milliseconds.`);

// Optional: Log or show the result of the program
if (timeDifferenceMs > 0) {
    console.log("Program is running.");
}
