// Exercises: Level 2
// 1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const products = [{
        product: 'banana',
        price: 3
    },
    {
        product: 'mango',
        price: 6
    },
    {
        product: 'potato',
        price: ' '
    },
    {
        product: 'avocado',
        price: 8
    },
    {
        product: 'coffee',
        price: 10
    },
    {
        product: 'tea',
        price: ''
    },
]
let totalPrice = products.filter((elem) => typeof elem.price === 'number' && !isNaN(elem.price)).map((elem) => elem.price).reduce((acc, cur) => acc + cur)
console.log(totalPrice)
// 2. Find the sum of price of products using only reduce reduce(callback))
let sumPrice = products.reduce((act, cur) => act + Number(cur.price), 0)
console.log(sumPrice)
// 3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
const countries = require('../09_day_starter/data/countries_data.js')
console.log('='.repeat(50))

function categorizeCountries(pattern) {
    let patternCountries = countries.filter((elem) => elem.name.match(pattern))
    return patternCountries
}
console.log(categorizeCountries(/land/gi))
console.log('+'.repeat(50))
console.log(categorizeCountries(/island/gi))
// 4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
const getStartingLetters = arr => {
    const occurences = arr
        .reduce((acc, {
            name
        }) => {
            const startingLetter = name[0]
            acc[startingLetter] = (acc[startingLetter] || 0) + 1
            return acc
        }, {})

    return Object
        .keys(occurences)
        .sort()
        .map(letter => ({
            letter,
            count: occurences[letter]
        }))
}
console.log(getStartingLetters(countries))
// 5. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
function getFirstTenCountries(endIndex) {
    return countries.slice(0, endIndex).map((elem) => elem.name)
}
console.log(getFirstTenCountries(10))
// 6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
function getLastTenCountries(startIndex) {
    let last = countries.length - startIndex
    let lastTenCountries = countries.slice(last)
    return lastTenCountries.map((elem) => elem.name)
}
console.log(getLastTenCountries(10))
// 7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
function getManyTimeCountry() {
    let occurrence = countries.reduce((acc, {
        name
    }) => {
        let startingLetter = name[0]
        acc[startingLetter] = (acc[startingLetter] || 0) + 1
        return acc
    }, {})
    console.log(occurrence)
    let manyTImeCountry = Object.entries(occurrence).sort((a, b) => b[1] - a[1])[0][0]
    console.log(manyTImeCountry)
}
getManyTimeCountry()