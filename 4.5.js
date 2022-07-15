function calcDistance(x1, x2, y1, y2) {
    let x = x1 - x2
    let y = y1 - y2
    return Math.sqrt(x * x + y * y)

}

console.log(calcDistance(1, 2, 1, 2));