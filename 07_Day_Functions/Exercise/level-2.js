// Exercises: Level 2
// 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(a, b, c) {
    let valueArr = []
    for (let i = 0; i < 10; i++) {
        y = (-a * i - c) / b
        valueArr.push([i, y])
    }
    return valueArr
}
console.log(solveLinEquation(1, 2, 3))
// 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}
function solveQuadrational(a, b, c) {
    if (typeof a === 'undefined' || typeof b === 'undefined' || typeof c == 'undefined') {
        return `{ 0 }`
    }
    let delta = Math.sqrt(b * b - 4 * a * c)
    let x1 = (-b + delta) / 2 * a
    let x2 = (-b - delta) / 2 * a
    if (x1 === x2) {
        return `{ ${x1} }`
    } else {
        return `{ ${x1}, ${x2} }`
    }

}
console.log(solveQuadrational())
console.log(solveQuadrational(1, 4, 4))
console.log(solveQuadrational(1, -1, -2))
console.log(solveQuadrational(1, 7, 12))
console.log(solveQuadrational(1, 0, -4))
console.log(solveQuadrational(1, -1, 0))
// 3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr) {
    for (let i of arr) {
        console.log(i)
    }
}
printArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
// 4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
// showDateTime()
// 08/01/2020 04:08
function showDateTime() {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let strDate = date.getDate()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    if (month >= 1 && month <= 9) {
        month = `0${month}`
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = `0${strDate}`
    }

    if (hours >= 0 && hours <= 9) {
        hours = `0${hours}`
    }

    if (minutes >= 0 && minutes <= 9) {
        minutes = `0${minutes}`
    }

    let formatDate = `${strDate}/${month}/${year} ${hours}:${minutes}`

    return formatDate
}
console.log(showDateTime())
// 5. Declare a function name swapValues. This function swaps value of x to y.
// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4
function swapValues(x, y) {
    [x, y] = [y, x]
    console.log(`x = ${x}, y = ${y}`)
}
swapValues(3, 4)
swapValues(4, 5)
// 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
// console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']
function reverseArray(array) {
    let newArr = []
    for (let i = array.length - 1; i >= 0; i--) {
        newArr.push(array[i])
    }
    return newArr
}
console.log(reverseArray([1, 2, 3, 4, 5]))
console.log(reverseArray(['A', 'B', 'C']))
// 7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(arr) {
    let newArr = new Array()
    for (let item of arr) {
        newArr.push(item.toUpperCase())
    }
    return newArr
}
console.log(capitalizeArray(['a', 'b', 'c']))
// 8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(arr, item) {
    arr.push(item)
    return arr
}
console.log(addItem([1, 2, 3], 'a'))
// 9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(arr, index) {
    arr.splice(index, 1)
    return arr
}
console.log(removeItem([1, 2, 3, 4, 5], 3))
// 10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(num) {
    let sum = 0
    for (let i = 0; i <= sum; i++) {
        sum += i
    }
    return sum
}
// 11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(num) {
    let sum = 0
    for (let i = 0; i <= sum; i++) {
        if (i % 2 !== 0) {
            sum += i
        }
    }
    return sum
}
// 12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(num) {
    let sum = 0
    for (let i = 0; i <= sum; i++) {
        if (i % 2 === 0) {
            sum += i
        }
    }
    return sum
}
// 13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.
function evensAndOdds(number) {
    let evensNum = 0
    let oddsNum = 0
    for (let i = 0; i <= number; i++) {
        if (i % 2 === 0) {
            evensNum++
        } else {
            oddsNum++
        }
    }
    console.log(`The number of odds are ${oddsNum}`)
    console.log(`The number of evens are ${evensNum}`)
}
evensAndOdds(100)
// 14. Write a function which takes any number of arguments and return the sum of the arguments
// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10
function sum() {
    let total = 0
    for (i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total
}
console.log(sum(1, 2, 3))
console.log(sum(1, 2, 3, 4))

// 15. Writ a function which generates a randomUserIp.
function randomUserIp() {
    let ipArr = []
    for (let i = 0; i < 4; i++){
        ipArr.push(String(Math.floor(Math.random() * 256)))
    }
    return ipArr.join('.')
}
console.log(randomUserIp())
console.log(randomUserIp())
// 16. Write a function which generates a randomMacAddress
function randomMacAddress() {
    let numArr = [...Array(10).keys()]
    let charArr = [...Array(6).keys()].map(i=> String.fromCharCode(i + 65))
    let arr = numArr.concat(charArr)
    let randomMacArr = []
    for (let i = 0; i < 6; i++){
        let random1 = Math.floor(Math.random() * 16)
        let random2 = Math.floor(Math.random() * 16)
        randomMacArr.push(arr[random1]+arr[random2])
    }
    return randomMacArr.join(':')
}
console.log(randomMacAddress())
console.log(randomMacAddress())
// 17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
// console.log(randomHexaNumberGenerator());
// '#ee33df'
function randomHexaNumberGenerator() {
    let numArr = [...Array(10).keys()]
    let charArr = [...Array(6).keys()].map(i=> String.fromCharCode(i + 65))
    let arr = numArr.concat(charArr)
    let randomHexaNumberArr = ['#']
    for (let i = 0; i < 6; i++){
        let random = Math.floor(Math.random() * 16)
        randomHexaNumberArr.push(arr[random])
    }
    return randomHexaNumberArr.join('')
}
console.log(randomHexaNumberGenerator())

// 18. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
// console.log(userIdGenerator());
// 41XTDbE
function userIdGenerator() {
    let numArr = [...Array(10).keys()]
    let charArr = [...Array(6).keys()].map(i=> String.fromCharCode(i + 65))
    let arr = numArr.concat(charArr)
    let userIdGeneratorArr = []
    for (let i = 0; i < 7; i++){
        let random = Math.floor(Math.random() * 16)
        userIdGeneratorArr.push(arr[random])
    }
    return userIdGeneratorArr.join('')
}
console.log(userIdGenerator())