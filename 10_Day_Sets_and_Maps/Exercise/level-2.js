// Exercises:Level 2
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']
// 1. Find a union b
let c = [...a, ...b]
let C = new Set(c)
console.log(c)
console.log(C)

// 2. Find a intersection b
let B = new Set(b)
let intersection = a.filter((elem) => B.has(elem))
console.log(intersection)
let intersectionC = new Set(intersection)
console.log(intersectionC)
// 3. Find a with b
let A = new Set(a)
let aWithB = b.filter((elem) => !A.has(elem))
let aWithBSet = new Set(aWithB)
console.log(aWithBSet)