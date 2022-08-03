// Exercises
// Exercises:Level 1
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']
// 1. create an empty set
let testSet1 = new Set()
console.log(testSet1)
// 2. Create a set containing 0 to 10 using loop
let testSet2 = new Set()
for (let i = 0; i <= 10; i++) {
    testSet2.add(i)
}
console.log(testSet2)
// 3. Remove an element from a set
testSet2.delete(0)
console.log(testSet2)
// 4. Clear a set
testSet2.clear()
console.log(testSet2)
// 5. Create a set of 5 string elements from array
let arr = [1, 2, 3]
let testSet3 = new Set(arr)
console.log(testSet3)
// 6. Create a map of countries and number of characters of a country
let countriesMap = new Map()
for (let country of countries) {
    countriesMap[country] = country.length
}
console.log(countriesMap)