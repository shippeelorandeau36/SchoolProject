function calculateAverage(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error("The list of numbers is empty.");
    }
    
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
}

console.log(calculateAverage([1, 2, 3, 4]));
