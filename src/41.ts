function sumNumbers(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

console.log(sumNumbers([1, 2, 3, 4, 5])); // Output: 15
