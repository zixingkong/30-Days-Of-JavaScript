// Exercises:Day 6
// Exercises: Level 1
// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]

// const mernStack = ['MongoDB', 'Express', 'React', 'Node']
// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop
console.log('for')
for (let i = 0; i < 11; i++) {
    console.log(i)
}
console.log('while')
let i = 0
while (i < 11) {
    console.log(i)
    i++
}
console.log('do while')
let j = 0
do {
    console.log(j)
    j++
} while (j < 11)
console.log('-'.repeat(50))
// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let i = 10; i >= 0; i--) {
    console.log(i)
}
let k = 10
while (k >= 0) {
    console.log(k)
    k--
}
let m = 10
do {
    console.log(m)
    m--
} while (m >= 0)
// 3. Iterate 0 to n using for loop
let n = 50
for (let i = 0; i <= n; i++) {
    console.log(i)
}
// 4. Write a loop that makes the following pattern using console.log():

//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######
let num = 7
for (let i = 0; i <= num; i++) {
    console.log('*'.repeat(i))
}
// 5. Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100
for (let i = 0; i <= 10; i++) {
    console.log(`${i} * ${i} = ${i * i}`)
}
// 6. Using loop print the following pattern

//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000
console.log('i\ti^2\ti^3')
for (let i = 0; i <= 10; i++) {
    console.log(`${i}\t${i*i}\t${i*i*i}`)
}

// 7. Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}
// 8. Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}
// 9. Use for loop to iterate from 0 to 100 and print only prime numbers
function isPrime(n) {
    if (n < 2) return false;
    var q = Math.floor(Math.sqrt(n));
    for (var i = 2; i <= q; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true
}
console.log('-'.repeat(50))
for (let i = 0; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i)
    }
}

// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// The sum of all numbers from 0 to 100 is 5050.
let sum = 0
for (let i = 0; i <= 100; i++) {
    sum += i
}
console.log(`the sum of all numbers from 0 to 100 is ${sum}`)
// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
let sumEvens = 0
let sumOdds = 0
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEvens += i
    } else {
        sumOdds += i
    }
}
console.log(`the sum of all evens from 0 to 100 is ${sumEvens}`)
console.log(`the sum of all odds from 0 to 100 is ${sumOdds}`)
// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
//   [2550, 2500]
let sumArr = new Array()
sumArr.push(sumEvens)
sumArr.push(sumOdds)
console.log(sumArr)
// 13. Develop a small script which generate array of 5 random numbers
let randArr = []
for (let i = 0; i < 5; i++) {
    randArr.push(Math.floor(Math.random() * 100))
}
console.log(randArr)
// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
let randomArr = new Array()
let rand
while (randomArr.length < 5) {
    rand = Math.floor(Math.random() * 100)
    if (randomArr.indexOf(rand) === -1) {
        randomArr.push(rand)
    }
}
console.log(randomArr)
// 15. Develop a small script which generate a six characters random id:
// 5j2khz
let charArr = [...Array(26).keys()].map(i => String.fromCharCode(i + 65))
let numArr = [...Array(10).keys()].map(i => String(i))
let arr = numArr.concat(charArr)
let total = arr.length
let randomCharNumStr = ''
for (let i = 0; i < 6; i++) {
    let rando = Math.floor(Math.random() * total)
    randomCharNumStr += arr[rando]
}
console.log(randomCharNumStr)