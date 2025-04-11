function calculateTotalCost(items: number[]): number {
    let totalCost = 0;
    items.forEach(item => {
        if (item > 100) {
            totalCost += item * 2;
        }
    });
    return totalCost;
}

const inputItems = [150, 80, 25, 30];
console.log(`The total cost is: ${calculateTotalCost(inputItems)}`);
