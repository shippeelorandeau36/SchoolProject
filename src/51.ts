function sumUpToN(n: number): number {
  let result = 0;
  
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      result += i;
    }
  }
  
  return result;
}

console.log(sumUpToN(10)); // Output: 36
