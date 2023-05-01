// Print Digits Backwards
// Difficulty
// Medium

// Concepts
// Logic, Math


// Write a function called printDigits that takes in one argument, num. When given an integer, the function should print (console.log) each digit in reverse order, starting with the ones place. Do not do this by just turning the number into a string and reversing it. Solve the problem using math. (Hint: look up while loops, and don’t forget about the % operator.)

// For example, if you were given 1 you should simply print 1, if given 314 you should print 4, 1, 3, and if given 12 you should print 2, 1:

// printDigits(1)
// // 1

// printDigits(314)
// // 4
// // 1
// // 3

// printDigits(12)
// // 2
// // 1


function printDigits(num) {
    while (num > 0) {
        const digit = num % 10
        console.log(digit)
        num = Math.floor(num / 10)
    }
}

printDigits(12345)
printDigits(987654321)



// function printDigits1(num1) {
//     let num2 = 10
//     while (num1 !==0) {
//         console.log(num1 % num2)
//         num1 -+ (num1 % num2)
//         num2 *=10
//     }
// }

