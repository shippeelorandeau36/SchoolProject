export function calculateSum(numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}
