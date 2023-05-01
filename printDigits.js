function printDigits(num) {
    while (num > 0) {
        const digit = num % 10
        console.log(digit)
        num = Math.floor(num / 10)
    }
}

printDigits(12345)
printDigits(987654321)

