// Exercises:Level 3
// 1. Check the speed difference among the following loops: while, for, for of, forEach
let numArr = [1, 2, 3]
let i = 0
console.time('while loop')
while (i < numArr.length) {
    console.count('while has been exeuted')
    i++
}
console.timeEnd('while loop')

console.time('for loop')
for (let i = 0; i < numArr.length; i++) {
    console.count('for has been exeuted')
}
console.timeEnd('for loop')

console.time('for of loop')
for (let i of numArr) {
    console.count('for of has been exeuted')
}
console.timeEnd('for of loop')

console.time('forEach loop')
numArr.forEach(() => console.count('forEach has been exeuted'));
console.timeEnd('forEach loop')