// Exercises: Level 1
// 1. Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
let text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
let pattern = /\d+/g
let result = text.match(pattern)
let totalAnnual = Number(result[0]) * 12 + Number(result[1]) + Number(result[2])
console.log(totalAnnual)
// 2. The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
// sortedPoints = [-4, -3, -1, -1, 0, 2, 4, 8]
// distance = 12
let sortedPoints = points.map((elem) => Number(elem)).sort((a, b) => a - b)
let distance = sortedPoints[sortedPoints.length - 1] - sortedPoints[0]
console.log(distance)
// 3. Write a pattern which identify if a string is a valid JavaScript variable
// is_valid_variable('first_name') # True
// is_valid_variable('first-name') # False
// is_valid_variable('1first_name') # False
// is_valid_variable('firstname') # True
function is_valid_variable(variable) {
    let pattern = /[^a-z0-9_]/g
    let pattern2 = /^\d/g
    if (variable.match(pattern) || variable.match(pattern2)) {
        return false
    }
    return true
}
console.log(is_valid_variable('first_name')) // True
console.log(is_valid_variable('first-name')) // False
console.log(is_valid_variable('1first_name')) // False
console.log(is_valid_variable('firstname')) //True