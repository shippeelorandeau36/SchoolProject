function findMedian(sortedNumbers: number[]): number {
    let count = sortedNumbers.length;
    
    if (count % 2 === 0) {
        return Math.floor((sortedNumbers[count / 2 - 1] + sortedNumbers[count / 2]) / 2);
    } else {
        return sortedNumbers[Math.floor(count / 2)];
    }
}
