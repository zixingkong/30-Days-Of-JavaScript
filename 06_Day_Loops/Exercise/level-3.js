// Exercises: Level 3
// 1. Copy countries array(Avoid mutation)
const countriesOld = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
let countriesCopy = new Array()
for (let country of countriesOld) {
    countriesCopy.push(country)
}
console.log(countriesCopy)
// 2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
countryCopy = JSON.parse(JSON.stringify(countriesOld));
console.log(countryCopy)
countryCopy.sort(function (a, b) {
    return a.length - b.length
})
console.log(countryCopy)
// 3. Sort the webTechs array and mernStack array
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
webTechs.sort()
mernStack.sort()
console.log(webTechs)
console.log(mernStack)
// 4. Extract all the countries contain the word 'land' from the countries array and print it as array
const {
    countries
} = require('./country.js')
let landCoutries = []
for (let country of countries) {
    if (country.includes('land')) {
        landCoutries.push(country)
    }
}
console.log(landCoutries)
// 5. Find the country containing the hightest number of characters in the countries array
let hightestCountry = countries[0]
for (let country of countries) {
    if (hightestCountry.length < country.length) {
        hightestCountry = country
    }
}
console.log(hightestCountry)
// 6. Extract all the countries contain the word 'land' from the countries array and print it as array
// 同第4题
// 7. Extract all the countries containing only four characters from the countries array and print it as array
let fourCountries = []
for (let country of countries) {
    if (country.length === 4) {
        fourCountries.push(country)
    }
}
console.log(fourCountries)
// 8. Extract all the countries containing two or more words from the countries array and print it as array
let twoOrMoreCountries = []
for (let country of countries) {
    if (country.split(' ').length >= 2) {
        twoOrMoreCountries.push(country)
    }
}
console.log(twoOrMoreCountries)
// 9. Reverse the countries array and capitalize each country and stored it as an array
countries.reverse()
console.log(countries)
let uppercaseCountries = []
for (let country of countries) {
    uppercaseCountries.push(country.toUpperCase())
}
console.log(uppercaseCountries)