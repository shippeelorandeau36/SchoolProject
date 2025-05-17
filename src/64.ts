function calculateArea(rectangle1: { width: number; height: number }, rectangle2: { width: number; height: number }): number {
    const widthMax = Math.max(rectangle1.width, rectangle2.width);
    const heightMax = Math.max(rectangle1.height, rectangle2.height);

    return (widthMax * heightMax) / 2;
}
