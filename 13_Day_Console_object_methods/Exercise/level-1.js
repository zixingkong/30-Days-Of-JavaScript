// Exercises
// Exercises:Level 1
// 1. Display the countries array as a table
const countries = require('../13_day_starter/data/countries_data.js')
console.table(countries)
// 2. Display the countries object as a table
for (let country of countries) {
    console.table(country)
}
// 3. Use console.group() to group logs
console.group('logs')