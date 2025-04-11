function fibonacci(n: number): number {
    if (n <= 1) {
        return n;
    }
    let a = 0, b = 1, c = a + b;
    for (let i = 2; i < n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}
